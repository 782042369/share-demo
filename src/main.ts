/*
 * @Author: 杨宏旋
 * @Date: 2021-07-07 14:12:33
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-07-27 15:07:04
 * @Description:
 */
// /*
//  * @Author: 杨宏旋
//  * @Date: 2021-05-07 11:08:45
//  * @LastEditors: 杨宏旋
//  * @LastEditTime: 2021-07-19 12:53:01
//  * @Description:
//  */
import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store'
import router from './router'
import { setupAntd } from './antd-ui'
import './style/index.scss'
;(async () => {
  const app = createApp(App)
  // router
  app.use(router)
  /* Automatically register components under Button, such as Button.Group */
  setupAntd(app)
  // store
  setupStore(app)
  // 挂载
  app.mount('#app')
})()
