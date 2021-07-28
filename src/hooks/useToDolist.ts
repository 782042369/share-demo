import { onMounted, onDeactivated, computed } from 'vue'
import { setCacheList } from '@/utils/cache'
import { useListStore } from '@/store/modules/list'
const useToDoList = function () {
  const ListStore = useListStore()
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
