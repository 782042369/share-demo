import { setCacheList } from '@/utils/cache'
import { useListStore } from '@/store/modules/list'
export default {
  computed: {
    Listdata() {
      return this.ListStore.getToDoList
    }
  },
  created() {
    this.ListStore = useListStore()
  },
  mounted() {
    window.addEventListener('beforeunload', () => beforeunloadFn())
  },
  methods: {
    handleChangeStatus({ uuid, type }) {
      this.ListStore.handleChangeStatus(uuid, type)
    },
    beforeunloadFn() {
      setCacheList(this.ListStore.getToDoList)
    }
  },
  destroyed() {
    window.removeEventListener('beforeunload', () => beforeunloadFn())
  }
}
