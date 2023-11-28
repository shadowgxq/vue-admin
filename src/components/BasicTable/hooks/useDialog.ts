import { computed, reactive, ref } from "vue"

export const useDialog = ({ handleRestFormData }) => {
    const dialogFormRef = ref<any>()

    const dialogState = reactive<{
        type: "ADD" | "EDIT"
    }>({
        type: "ADD"
    })

    const dialogVisible = ref(false)

    const getDialogTitle = computed(() => {
        return dialogState.type == "ADD" ? "新增" : "编辑"
    })

    function handleDialogConfirm() {
        let state = dialogFormRef.value.handleValidate()
        if (!state) return
        //type
        switch (dialogState.type) {
            case "ADD":
                break;
            case "EDIT":
                break;
        }
    }

    const handleBeforeClose = (done: () => void) => {
        handleRestFormData()
        done()
    }

    function handleDialogClose() {
        dialogVisible.value = false
        handleRestFormData()
    }

    return {
        dialogFormRef,
        dialogState,
        dialogVisible,
        getDialogTitle,
        handleDialogConfirm,
        handleDialogClose,
        handleBeforeClose
    }
}