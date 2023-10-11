<!--
 * @Author: your name
 * @Date: 2022-01-18 17:59:37
 * @LastEditTime: 2023-04-08 17:53:36
 * @LastEditors: sueRimn
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vite-vue3-admin\src\views\login\login.vue
-->
<template>
  <div>
    <div class="name">
      <h1>{{name}}</h1>
      <h1>{{work}}</h1>
    </div>
    <el-form :model="formData" label-width="100px">
      <el-form-item label="用户名">
        <el-input placeholder="请输入用户名" v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input placeholder="请输入密码" show-password type="password" v-model="formData.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
      </el-form-item>

    </el-form>

  </div>
</template>
<script lang="ts">
import axios from "axios";
import qs from "qs";
import { login } from "/@/api/login";
import {
  ref,
  computed,
  reactive,
  toRefs,
  getCurrentInstance,
  onMounted,
} from "vue";
export default {
  name: "Login",
  setup() {
    const name = ref("我是杜青青");
    console.log(name.value);
    const formData = reactive({
      grant_type: "password",
      username: "",
      password: "",
    });
    const userInfo = reactive({
      work: "搬砖",
    });
    const ctx: any = getCurrentInstance();
    console.log(ctx, "ctx");
    const http = ctx.appContext.config.globalProperties.$http;
    console.log(http);

    // 定义一个方法
    const submit = () => {
      console.log(formData);
      login(formData ).then((res:any)=>{

      })
    };

    return {
      name,
      formData,
      submit,
      ...toRefs(userInfo),
    };

    //setup函数 1.在beforeCreate之前调用， setup中不能使用this
    //setup中定义的值是一个对象，都有一个value属性，在模板中不需要取value,vue会自动获取；
    //ref 创建响应式数据
    // toRefs()函数可以将reactive()创建出来的响应式对象，转换为普通对象，只不过这个对象上的每个属性节点，都是ref()类型的响应式数据
  },
};
</script>
<style lang="less" scoped>
//@color:#333;
.name {
  width: 100%;
  h1 {
    font-size: 30px;
    color: @color;
  }
}
</style>