/*
 * @Author: 杨宏旋
 * @Date: 2021-05-17 11:36:33
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-07-27 19:10:10
 * @Description:
 */
import type { ToDoListArrayProps, ToDoListProps } from '@/types/store/type'
import { defineStore } from 'pinia'
import { store } from '@/store'
import uuid from '@/utils/uuid'
import { dateFormat } from '@/utils'
import { getCacheList } from '@/utils/cache'

export const useListStore = defineStore({
  id: 'app-todolist',
  state: (): {
    toDolist: ToDoListArrayProps
  } => ({
    // user info
    toDolist: getCacheList() || []
    // token
  }),
  getters: {
    getToDoList() {
      return this.toDolist as ToDoListArrayProps
    }
  },
  actions: {
    handleSetList(info: string) {
      const time = new Date()
      this.toDolist.unshift({
        info,
        time: time.getTime(),
        uuid: uuid(),
        status: 'created',
        format: dateFormat(time)
      })
    },
    handleChangeStatus(
      uuid: ToDoListProps['uuid'],
      type: ToDoListProps['status']
    ) {
      this.toDolist.map((ele) => {
        const time = new Date()
        ele.uuid === uuid &&
          ((ele.status = type),
          (ele.time = time.getTime()),
          (ele.format = dateFormat(time)))
        return ele
      })
      this.toDolist.sort((a, b) => b.time - a.time)
    }
  }
})

// Need to be used outside the setup
export function useListStoreWidthOut() {
  return useListStore(store)
}
