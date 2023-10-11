<!--
 * @Author: your name
 * @Date: 2022-01-18 16:34:41
 * @LastEditTime: 2023-04-08 17:10:40
 * @LastEditors: sueRimn
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vite-vue3-admin\src\views\home\index.vue
-->
<template>
  <HelloWorld :msg="msg"></HelloWorld>
</template>

<script lang="ts">
import HelloWorld from "/@/components/HelloWorld.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  components: { HelloWorld },
  setup() {
    return {
      msg: "欢迎来到vue3",
    };
  },
});
</script>
