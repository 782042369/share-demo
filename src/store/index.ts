/*
 * @Author: 杨宏旋
 * @Date: 2021-05-17 11:35:18
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-05-17 11:35:26
 * @Description:
 */
import type { App } from 'vue'
import { createPinia } from 'pinia'
const store = createPinia()

export function setupStore(app: App<Element>) {
  app.use(store)
}

export { store }
