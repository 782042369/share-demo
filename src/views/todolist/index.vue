<!--
 * @Author: yanghongxuan
 * @Date: 2021-07-27 14:58:38
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-07-27 18:41:53
 * @Description:
-->
<template>
  <div class="content">
    <ToHeader @addlist="handleAddList" />
    <ToList :Listdata="Listdata" @changeStatus="handleChangeStatus" />
  </div>
</template>
<script lang='ts' setup>
import { computed, onMounted, onDeactivated } from 'vue'
import { useListStore } from '@/store/modules/list'
import { setCacheList } from '@/utils/cache'
import ToHeader from '@/components/ToHeader.vue'
import ToList from '@/components/ToList.vue'

const ListStore = useListStore()

const handleAddList = (value: string) => {
  ListStore.handleSetList(value)
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
onMounted(() => {
  window.addEventListener('beforeunload', () => beforeunloadFn())
})
onDeactivated(() => {
  window.removeEventListener('beforeunload', () => beforeunloadFn())
})
const beforeunloadFn = () => {
  setCacheList(ListStore.getToDoList)
}
</script>
<style scoped lang='scss'>
.content {
  background: url('@/images/bg.jpeg') no-repeat;
  width: 100vw;
  height: 100vh;
  padding: 2vw;
  background-size: cover;
}
</style>
