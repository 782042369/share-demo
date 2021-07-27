/*
 * @Author: yanghongxuan
 * @Date: 2021-07-27 16:49:29
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-07-27 16:58:57
 * @Description:
 */
function uuid(): string {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return (
    S4() +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    S4() +
    S4()
  )
}
export default uuid
