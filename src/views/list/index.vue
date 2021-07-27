<!--
 * @Author: yanghongxuan
 * @Date: 2021-07-27 14:58:38
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-07-27 19:12:37
 * @Description:
-->
<template>
  <ToList :Listdata="Listdata" @changeStatus="handleChangeStatus" />
</template>
<script lang='ts' setup>
import ToList from '@/components/ToList.vue'
import useToDoList from '@/hooks/useToDolist'
const { Listdata, handleChangeStatus } = useToDoList()
</script>
<style scoped lang='scss'>
</style>
