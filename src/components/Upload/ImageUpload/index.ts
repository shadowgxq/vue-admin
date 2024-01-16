export const ImageUploadProps =
{
    value: {
        type: [String, Object, Array]
    },
    // 图片数量限制
    limit: {
        type: Number,
        default: 3,
    },
    // 大小限制(MB)
    fileSize: {
        type: Number,
        default: 10,
    },
    // 文件类型, 例如['png', 'jpg', 'jpeg']
    fileType: {
        type: Array,
        default: () => ["png", "jpg", "jpeg"],
    },
    // 是否显示提示
    isShowTip: {
        type: Boolean,
        default: true
    }
}

