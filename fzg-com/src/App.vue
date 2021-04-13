<template>
  <img src="./assets/my_icon.jpg">
  <div>
    <p>
      欢迎来到我的小站，本小站使用
      <code v-text="'Vue3+Element-Plus'"></code>
      部署前端。
    </p>
    <el-button type="primary" >这是一个element组件</el-button>
    <p>
      话说element默认的这个hotpink好猛男呀
    </p>
    <p>
      apis:
      <a href="https://www.fengzigeng.com/api">https://www.fengzigeng.com/api</a>
    </p>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
