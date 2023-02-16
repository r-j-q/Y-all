<template>
    <u-icon name="copy" custom-prefix="custom-icon" size="35"></u-icon>
</template>

<script lang='ts' setup>
// import { ref, reactive, computed, } from 'vue'

// 此方法最好放在点击事件中
const setCopy = (content: string) => {
    // 使用#ifdef H5和#endif控制各端调用情况

    // 该方法不支持h5
    //#ifndef H5
    uni.setClipboardData({
        data: String(content), // 必须字符串
        success: function () {
            console.log('success');
        }
    });
    //#endif

    // h5端赋值方法，使用创建节点
    // #ifdef H5
    if (!document.queryCommandSupported('copy')) { // 兼容某些浏览器的判断
        console.log('该浏览器不支持')
    }
    let textarea = document.createElement("textarea") as any
    textarea.value = content
    textarea.readOnly = "readOnly"
    document.body.appendChild(textarea)
    textarea.select() // 选择对象
    textarea.setSelectionRange(0, content.length) // 核心
    let result = document.execCommand("copy") // 执行浏览器复制命令
    if (result) {
        uni.showToast({
            title: '复制成功',
            duration: 2000
        });
    }
    textarea.remove()
    // #endif
}

// 暴露方法给父组件
export default ({ setCopy })
</script>

<style lang='scss' scoped>
	@import "@/uview-ui/iconfont.css";
	</style>
