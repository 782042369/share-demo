<!--
 * @Author: yanghongxuan
 * @Date: 2021-07-27 14:58:38
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-07-27 19:13:02
 * @Description:
-->
<template>
  <div class="content">
    <ToHeader @addlist="handleAddList" />
    <ToList :Listdata="Listdata" @changeStatus="handleChangeStatus" />
  </div>
</template>
<script lang='ts' setup>
import { useListStore } from '@/store/modules/list'
import ToHeader from '@/components/ToHeader.vue'
import ToList from '@/components/ToList.vue'
import useToDoList from '@/hooks/useToDolist'
const { Listdata, handleChangeStatus } = useToDoList()
const ListStore = useListStore()
const handleAddList = (value: string) => {
  ListStore.handleSetList(value)
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
