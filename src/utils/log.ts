/*
 * @Author: 杨宏旋
 * @Date: 2021-05-13 10:41:37
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-07-27 15:09:28
 * @Description:
 */
const projectName = import.meta.env.VITE_GLOB_APP_TITLE

export function warn(message: string) {
  console.warn(`[${projectName} warn]:${message}`)
}

export function error(message: string) {
  throw new Error(`[${projectName} error]:${message}`)
}

export function info(message: string) {
  console.log(`[${projectName} error]:${message}`)
}
