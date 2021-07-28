<!--
 * @Author: yanghongxuan
 * @Date: 2021-07-27 18:24:42
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-07-28 10:14:48
 * @Description:
-->
<template>
  <header>
    <a-input v-model:value="value" @key.enter="handleAddList" />
    <a-button type="primary" @click="handleAddList">添加</a-button>
  </header>
</template>
<script lang='ts' setup>
import { message } from 'ant-design-vue'
import { defineEmits, ref } from 'vue'

const EMIT = defineEmits(['addlist'])
const value = ref('')
const handleAddList = () => {
  if (!value.value) {
    message.warning('输入内容不能为空')
    return
  }
  EMIT('addlist', value.value)
  value.value = ''
}
</script>
<style scoped lang='scss'>
header {
  display: flex;
  margin: 20px 0 0 0;
}
</style>
