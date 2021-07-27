/*
 * @Author: yanghongxuan
 * @Date: 2021-07-27 16:52:59
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-07-27 18:36:54
 * @Description:
 */
export interface ToDoListProps {
  info: string
  time: number
  uuid: string
  status: 'created' | 'delete' | 'complete'
  format: string
}

export type ToDoListArrayProps = ToDoListProps[]
