<!--
 * @Author: your name
 * @Date: 2022-01-18 16:25:08
 * @LastEditTime: 2023-05-30 13:47:31
 * @LastEditors: sueRimn
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vite-vue3-admin\src\components\HelloWorld.vue
-->
<template>
  <h1>{{ msg }}</h1>
  <el-button @click="realTime.count++">count is: {{ realTime.count }}</el-button>
  <el-button @click="handleclick">点击跳转其它路由</el-button>
  <el-button @click="handleclickCharts">图表数据</el-button>
  <el-button @click="handleclickMao">锚点效果</el-button>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'Index',
  props: { msg: { type: String, default: '欢迎来到vue3' } },
  setup(props) {
    const router = useRouter();
    let realTime = reactive({ count: 0 });

    function handleclick() {
      router.push({ path: '/login' })
    }
    function handleclickCharts(){
      router.push({ path: '/chart' })
    }
    function handleclickMao(){
      router.push({ path: '/maodian' })
    }
    return {
      msg: props.msg,
      realTime,
      handleclick,
      handleclickCharts,
      handleclickMao
    }
  }
})
</script>
