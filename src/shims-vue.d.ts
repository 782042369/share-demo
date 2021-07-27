/*
 * @Author: 杨宏旋
 * @Date: 2021-07-07 14:12:33
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-19 12:57:29
 * @Description:
 */
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
