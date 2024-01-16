<template>
    <div class="component-upload-image">
        <el-upload multiple :action="state.uploadImgUrl" list-type="picture-card" :on-success="handleUploadSuccess"
            :before-upload="handleBeforeUpload" :limit="limit" :on-error="handleUploadError" :on-exceed="handleExceed"
            ref="imageUpload" :on-remove="handleDelete" :show-file-list="true" :headers="state.headers"
            :file-list="state.fileList" :on-preview="handlePictureCardPreview"
            :class="{ hide: state.fileList.length >= limit }">
            <el-icon class="avatar-uploader-icon">
                <Plus />
            </el-icon>
        </el-upload>

        <!-- 上传提示 -->
        <div class="el-upload__tip" slot="tip" v-if="showTip">
            <slot name="tip">
                请上传
                <template v-if="fileSize">
                    大小不超过 <b style="color: #f56c6c">{{ fileSize }}MB</b>
                </template>
                <template v-if="fileType">
                    格式为 <b style="color: #f56c6c">{{ fileType.join("/") }}</b>
                </template>
                的文件
            </slot>
        </div>

        <el-dialog v-model="state.dialogVisible" title="预览" width="800" append-to-body>
            <img :src="state.dialogImageUrl" style="display: block; max-width: 100%; margin: 0 auto" />
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue';
import { ImageUploadProps } from './index'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/index.css'
const emits = defineEmits(['handle-change'])
const imageUpload = ref<any>(null);

const state = reactive<any>({
    number: 0,
    uploadList: [],
    dialogImageUrl: "",
    dialogVisible: false,
    hideUpload: false,
    uploadImgUrl: "http://zcl.fengjingit.com/assets/common/upload",
    headers: {
        Authorization: "Bearer " + "eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjM0MmQ3ODRmLThjZGUtNDU0Ny1hNjJmLTJiNDlhMTMzYmU4OSJ9.gZVZF-4bef9nIJlwr3VKtIrXMS__XZtjmdOFAfi4POCS1sWPOKuDSSdU7QIR2Cw2e9U909CRFvKDKYwIi8C7tQ",
    },
    fileList: [],
})

const props = defineProps(ImageUploadProps)

const showTip = computed(() => {
    return props.isShowTip && (props.fileType || props.fileSize);
})
function uploadedSuccessfully() {

}

function handleUploadSuccess(res, file) {
    if (res.code === 200) {
        state.uploadList.push({ name: res.fileName, url: res.url })
        emits("handle-change")
        uploadedSuccessfully()
    } else {
        state.number--;
        imageUpload.value.handleRemove(file);
        ElMessage({
            message: res.msg,
            type: "error",
        });
        uploadedSuccessfully();
    }
}

function handleBeforeUpload(file) {
    let isImg = false;
    if (props.fileType.length) {
        let fileExtension = "";
        if (file.name.lastIndexOf(".") > -1) {
            fileExtension = file.name.slice(file.name.lastIndexOf(".") + 1);
        }
        isImg = props.fileType.some((type) => {
            if (file.type.indexOf(type) > -1) return true;
            if (fileExtension && fileExtension.indexOf(type as string) > -1) return true;
            return false;
        });
    } else {
        isImg = file.type.indexOf("image") > -1;
    }

    if (!isImg) {
        ElMessage({
            message: `文件格式不正确, 请上传${props.fileType.join("/")}图片格式文件!`,
            type: "error",
        });
        return false;
    }
    if (props.fileSize) {
        const isLt = file.size / 1024 / 1024 < props.fileSize;
        if (!isLt) {
            ElMessage({
                message: `上传头像图片大小不能超过 ${props.fileSize} MB!`,
                type: "error",
            });
        }
        ElMessage({
            message: '正在上传图片，请稍候...',
            duration: 1000,
        })
        state.number++;
    }
}
function handlePictureCardPreview(file) {
    state.dialogImageUrl = file.url;
    state.dialogVisible = true;
}


function handleDelete(file) {
    const findex = state.fileList.map((f) => f.name).indexOf(file.name);
    if (findex > -1) {
        state.fileList.splice(findex, 1);

    }
}

function handleExceed() {
    ElMessage({
        message: `最多只能上传${props.limit}张图片`,
        type: "error",
    })
}
function handleUploadError() {
    ElMessage({
        message: `上传失败`,
        type: "error",
    })
}

</script>

<style lang="less" scoped>
:deep(.hide .el-upload--picture-card) {
    display: none;
}

// 去掉动画效果
:deep(.el-list-enter-active, .el-list-leave-active) {
    transition: all 0s;
}

:deep(.el-list-enter,
    .el-list-leave-active) {
    opacity: 0;
    transform: translateY(0);
}

.upload-demo .el-upload-list .el-upload-list__item-thumbnail {
    max-width: 100px;
    /* 缩略图的最大宽度 */
    height: auto;
    /* 保持缩略图的纵横比 */
}

:deep(.el-upload--picture-card) {
    width: 100px;
    height: 100px;
    line-height: 100px;
}

:deep(.el-upload-list--picture-card .el-upload-list__item) {
    width: 100px !important;
    height: 100px !important;
}
</style>