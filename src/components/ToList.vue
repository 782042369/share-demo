<!--
 * @Author: yanghongxuan
 * @Date: 2021-07-27 18:30:26
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-07-27 19:10:36
 * @Description:
-->
<template>
  <a-list item-layout="horizontal" :data-source="PROPS.Listdata" rowKey="uuid">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta>
          <template #title>
            <p>
              <span>id:</span>
              {{ item.uuid }}
            </p>
            <p>
              <span>内容:</span>
              {{ item.info }}
            </p>
          </template>
          <template #avatar>
            <p>
              <span>时间:</span>
              {{ item.format }}
            </p>
          </template>
        </a-list-item-meta>
        <template #actions>
          <div class="btn">
            <span
              v-if=" item.status === 'created' "
              @click="handleChangeStatus(item.uuid,'complete')"
            >完成</span>
            <span
              class="delete"
              v-if=" item.status === 'created' "
              @click="handleChangeStatus(item.uuid,'delete')"
            >删除</span>
            <span class="txt" v-if=" item.status === 'complete' ">已完成</span>
            <span class="txt" v-if=" item.status === 'delete' ">已删除</span>
          </div>
        </template>
      </a-list-item>
    </template>
  </a-list>
</template>
<script lang='ts' setup>
import type { ToDoListProps } from '@/types/store/type'
import { defineProps, defineEmits } from 'vue'

const PROPS = defineProps({
  Listdata: {
    type: Array as () => Array<ToDoListProps>,
    required: true,
    default: () => []
  }
})
console.log('PROPS: 3', PROPS)
const EMIT = defineEmits(['changeStatus'])
const handleChangeStatus = (uuid: string, type: 'complete' | 'delete') => {
  EMIT('changeStatus', {
    uuid,
    type
  })
}
</script>
<style scoped lang='scss'>
.ant-list {
  overflow: auto;
  height: calc(-77px + 100vh);
  margin: 20px 0 0 0;
  padding: 0 0 20px 0;
  background: #fefefe;
}
.ant-list-item {
  padding: 15px;
}
.btn {
  margin: 10px 0 0 0;
  font-size: 18px;
  span + span {
    margin: 0 0 0 10px;
  }
  .delete {
    color: #f81d22;
  }
  span {
    color: #1890ff;
    cursor: pointer;
  }
  .txt {
    color: #333;
  }
}
</style>
