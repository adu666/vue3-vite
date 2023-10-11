// /*
//  * @Descripttion: 
//  * @version: 
//  * @Author: sueRimn
//  * @Date: 2022-01-20 19:45:15
//  * @LastEditors: sueRimn
//  * @LastEditTime: 2022-03-09 14:11:28
//  */
// import axios from "axios";
 import qs from "qs";

// // axios.defaults.baseURL = ''  //正式
// // axios.defaults.baseURL = 'http://test' //测试
//  axios.defaults.baseURL = '/api'
// //设置超时
// axios.defaults.timeout = 10000;
// axios.interceptors.request.use(
//   config => {
//     //let token = local.get('Authorization');
//     let token ="Basic ZHNpY20td2ViLW1hbmFnZXI6ZHNpY20td2ViLW1hbmFnZXItcHcjJCMlQA==";
//     token && (config.headers.Authorization = token);
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

// axios.interceptors.response.use(
//   response => {
//     if (response.status == 200) {
//       return Promise.resolve(response);
//     } else {
//       return Promise.reject(response);
//     }
//   },
//   error => {
//   	console.log(`异常请求：${JSON.stringify(error.message)}`)
//   }
// );
// export default {
//   post(url:string, data:any) {
//     return new Promise((resolve, reject) => {
        
//       axios({
//           method: 'post',
//           url,
//           data: qs.stringify(data),
//         })
//         .then(res => {
//           resolve(res)
//         })
//         .catch(err => {
//           reject(err)
//         });
//     })
//   },

//   get(url:string, data:any) {
//     return new Promise((resolve, reject) => {
//       axios({
//           method: 'get',
//           url,
//           params: data,
//         })
//         .then(res => {
//           resolve(res)
//         })
//         .catch(err => {
//           reject(err)
//         })
//     })
//   }
// };
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'

interface ResponseData {
  code: number;
  message: string;
  data: any;
}

// 创建axios实例
const service: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 在请求头中添加token
    sessionStorage.setItem("token","ZHNpY20td2ViLW1hbmFnZXI6ZHNpY20td2ViLW1hbmFnZXItcHcjJCMlQA==")
    const token = sessionStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = 'Basic ' + token
    }
    // config.headers.post['Content-Type'] = 'application/json'
    // config.headers.put['Content-Type'] = 'application/json'
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data
    if (res.code !== 200) {
      ElMessage({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      // token过期或未登录，返回登录页
      if (res.code === 401) {
        location.reload()
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res.data
    }
  },
  (error) => {
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

// 定义请求方法
const request = {
  get(url: string, params?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      service
        .get(url, { params })
        .then((res) => {
          resolve(res)
        })
        .catch((err: Error) => {
          reject(err)
        })
    })
  },
  post(url: string, data?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      service
        .post(url, qs.stringify(data))
        .then((res) => {
          resolve(res)
        })
        .catch((err: Error) => {
          reject(err)
        })
    })
  },
  put(url: string, data?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      service
        .put(url, data)
        .then((res) => {
          resolve(res)
        })
        .catch((err: Error) => {
          reject(err)
        })
    })
  }
}

export default request