<!--
 * @Author: yanghongxuan
 * @Date: 2021-07-27 14:58:38
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-07-28 10:13:01
 * @Description:
-->
<template>
  <ToHeader @addlist="handleAddList" />
  <ToList :Listdata="Listdata" @changeStatus="handleChangeStatus" />
</template>
<script>
import { useListStore } from '@/store/modules/list'
import ToHeader from '@/components/ToHeader.vue'
import ToList from '@/components/ToList.vue'
import mixinstodo from '@/mixins/mixinstodo'
export default ({
  components: {
    ToHeader,
    ToList
  },
  mixins: [mixinstodo],
  methods: {
    handleAddList (value) {
      this.ListStore.handleSetList(value)
    }
  }
})
</script>
