<!--
 * @Author: 杨宏旋
 * @Date: 2021-05-07 11:08:45
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-07-27 19:17:12
 * @Description:
-->
<template >
  <div class="content">
    <a-button type="primary" ghost>
      <router-link to="/list">list</router-link>
    </a-button>
    <a-button type="primary" ghost>
      <router-link to="/todolist">todolist</router-link>
    </a-button>
    <router-view />
  </div>
</template>

<style scoped lang='scss'>
.content {
  background: url('@/images/bg.jpeg') no-repeat;
  width: 100vw;
  height: 100vh;
  padding: 2vw;
  background-size: cover;
}
</style>
