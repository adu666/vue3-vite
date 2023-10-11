/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2023-04-07 23:04:29
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-04-08 17:17:38
 */
import req from '/@/utils/axios'
//登录
export function login(params:any) {
    return req.post("/auth/oauth/token", params);
}

