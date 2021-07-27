/*
 * @Author: 杨宏旋
 * @Date: 2021-05-13 14:50:45
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-07-27 17:50:52
 * @Description:
 */
import { getStore, setStore } from '../storage'

export function getCacheList() {
  return getStore({
    name: 'list',
    type: 'local'
  })
}
export function setCacheList(content: any) {
  return setStore({
    name: 'list',
    type: 'local',
    content
  })
}
