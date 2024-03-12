<script setup></script>

<template>
  <div>
    我的APP
    <test-demo></test-demo>
    <el-button @click="$route.push('/home')">跳首页</el-button>
    <el-button>跳列表页</el-button>
  </div>
</template>

<style scoped></style>
