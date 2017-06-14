<template>
  <div id="app">
    <router-link to="/top">トップ</router-link>
    <router-link to="/news">ニュース</router-link>
    <router-link to="/category">カテゴリ一覧</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
