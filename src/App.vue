<script setup>
  import { useUserStore } from '@/stores/user'
  const userStore = useUserStore()
</script>

<template>
  <div>
    <hr />
    <router-view></router-view>
    <hr />
    <hr />
    <hr />
    我的APP
    <test-demo></test-demo>
    <el-button @click="$route.push('/home')">跳首页</el-button>
    <el-button>跳列表页</el-button>

    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
   
    <p>{{ userStore.token }}</p>
    <el-button @click="userStore.setToken('rewqdadadasz')">
      登录
    </el-button>
    <el-button @click="userStore.removeToken()">退出</el-button>
  </div>
</template>

<style scoped></style>
