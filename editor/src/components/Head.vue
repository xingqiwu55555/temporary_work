<template>
  <div class="header">
    <div class="header-mobile">
      <!-- <h2 class="logo">
        <router-link :to="{ name: 'league'}" exact tag="a">
          <img src="../assets/images/logo.png" alt="">
        </router-link>
      </h2> -->
    </div>
    <div class="header-pc">
      <h2 class="logo">
        <router-link :to="{ name: 'league'}" exact tag="a">
          <img src="../assets/images/logo.png" alt="">
        </router-link>
      </h2>
      <img src="" alt="" class="">
      <ul class="nav">
        <li><router-link :to="{ name: 'league'}" exact class="active" tag="a">微盟</router-link></li>
        <li><router-link :to="{ name: 'agent'}" exact tag="a">代理商</router-link></li>
        <li><router-link :to="{ name: 'template'}" exact tag="a">模板</router-link></li>
        <li><router-link :to="{ name: 'investment'}" exact tag="a">招商加盟</router-link></li>
        <li><router-link :to="{ name: 'about'}" exact tag="a">关于我们</router-link></li>
      </ul>
      <div class="form">
        <router-link :to="{ name: 'login'}" exact class="logon-btn" tag="a">登录</router-link>
        <router-link :to="{ name: 'register'}" exact class="register-btn" tag="a">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods:{
      
    }
  }
</script>

<style lang="scss" scoped>
@import  "../assets/scss/head";
</style>
