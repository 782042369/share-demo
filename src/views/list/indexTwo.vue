<!--
 * @Author: yanghongxuan
 * @Date: 2021-07-27 14:58:38
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-07-28 10:13:10
 * @Description:
-->
<template>
  <ToList :Listdata="Listdata" @changeStatus="handleChangeStatus" />
</template>
<script>
import { useListStore } from '@/store/modules/list'
import ToList from '@/components/ToList.vue'
import mixinstodo from '@/mixins/mixinstodo'
export default ({
  components: {
    ToList
  },
  mixins: [mixinstodo],
})
</script>
