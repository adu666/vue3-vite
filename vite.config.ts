/*
 * @Author: your name
 * @Date: 2022-01-18 16:30:57
 * @LastEditTime: 2023-10-09 13:19:57
 * @LastEditors: sueRimn
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vite-vue3-admin\vite.config.ts
 */
import path from "path";  
const pathResolve = (pathStr: string) => {
  return path.resolve(__dirname, pathStr);
}
// const { VITE_PORT, VITE_OPEN, VITE_PUBLIC_PATH } = loadEnv();
const config = {
  base: './',//在生产中服务时的基本公共路径。@default '/'
  alias: {
    '/@/': pathResolve('./src'),
  },
  outDir: 'vite-init',//构建输出将放在其中。会在构建之前删除旧目录。@default 'dist'
  minify: 'esbuild',//构建时的压缩方式
  hostname: 'localhost',//本地启动的服务地址
  port: '8087',//服务端口号
  open: true,//启动服务时是否在浏览器打开
  https: false,//是否开启https
  ssr: false,//是否服务端渲染
  optimizeDeps: {// 引入第三方的配置
    include: ['axios']
  },
  compilerOptions: {
    "types": ["element-plus/global"]
  },
  transpileDependencies: [
    'vuetify'
  ],
  proxy: {
    '/api': {
      target: '',
      changeOrigin: true,
      pathRewrite: {           //表示需要rewrite重写的
        '^/api': '  ',
      }
    },
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#ec6800'
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  //使用全局less
  cssPreprocessOptions: {
    less: {
      additionalData: '@import "./src/style/index.less";'
    }
  }
}
module.exports = config;
