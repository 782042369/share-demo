<!--
 * @Author: yanghongxuan
 * @Date: 2021-07-27 14:58:56
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-07-27 14:58:57
 * @Description:
-->
<template>
  <div>22</div>
</template>
<script lang='ts' setup>
import { defineProps, defineEmit, reactive } from 'vue'
const PROPS = defineProps({
  foo: String
})
const EMIT = defineEmit(['update', 'delete'])
const STATE = reactive({ name: '' })
</script>
<style scoped lang='scss'>
</style>
