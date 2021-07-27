/*
 * @Author: 杨宏旋
 * @Date: 2021-05-12 16:38:12
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-05-17 16:48:38
 * @Description:
 */
export interface secondaryBusinessListType {
  primaryBusinessId: number
  primaryBusinessName: string
}
export interface businessListType {
  primaryBusinessId: number
  primaryBusinessName: string
  secondaryBusinessList: secondaryBusinessListType[]
}
