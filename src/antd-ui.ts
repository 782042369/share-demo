/*
 * @Author: 杨宏旋
 * @Date: 2021-07-19 12:51:20
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-07-27 18:48:56
 * @Description:
 */
import type { App } from 'vue'
import { Input, Button, List } from 'ant-design-vue'
const plugins = [Input, Button, List]
export const setupAntd = (app: App) => {
  plugins.forEach((plugin) => {
    app.use(plugin)
  })
}
