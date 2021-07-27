/*
 * @Author: yanghongxuan
 * @Date: 2021-07-27 18:55:54
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-07-27 19:05:48
 * @Description:
 */
import { onMounted, onDeactivated, computed } from 'vue'
import { setCacheList } from '@/utils/cache'
import { useListStore } from '@/store/modules/list'

const ListStore = useListStore()

const useToDoList = function () {
  onMounted(() => {
    window.addEventListener('beforeunload', () => beforeunloadFn())
  })
  onDeactivated(() => {
    window.removeEventListener('beforeunload', () => beforeunloadFn())
  })
  const beforeunloadFn = () => {
    setCacheList(ListStore.getToDoList)
  }
  const Listdata = computed(() => ListStore.getToDoList)
  const handleChangeStatus = ({
    uuid,
    type
  }: {
    uuid: string
    type: 'complete' | 'delete'
  }) => {
    ListStore.handleChangeStatus(uuid, type)
  }
  return {
    Listdata,
    handleChangeStatus
  }
}
export default useToDoList
