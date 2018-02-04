<template>
  <el-col :span="24">
    <div class="menu-head-img">
      <img :class="{'sx-img': isCollapse}" @click="toggleMenu" src="../assets/images/head.jpg" alt="">
    </div>
    <el-menu default-active="1"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color=" #222430"
      text-color="#fff"
      active-text-color="#fff"
      :router="isRoute"
    >
      <el-menu-item index="1" route="overview">
        <img src="../assets/images/slider1.png" alt="">
        <span slot="title">概述</span>
      </el-menu-item>
      <el-menu-item index="2" route="login">
        <img src="../assets/images/slider2.png" alt="">
        <span slot="title">装修</span>
      </el-menu-item>
      <el-menu-item index="3" route="form">
        <img src="../assets/images/slider3.png" alt="">
        <span slot="title">表单</span>
      </el-menu-item>
      <el-menu-item index="4" route="market">
        <img src="../assets/images/slider4.png" alt="">
        <span slot="title">营销</span>
      </el-menu-item>
      <el-menu-item index="5" route="login">
        <img src="../assets/images/slider5.png" alt="">
        <span slot="title">数据</span>
      </el-menu-item>
      <el-menu-item index="6" route="login">
        <img src="../assets/images/slider6.png" alt="">
        <span slot="title">推广</span>
      </el-menu-item>
      <el-menu-item index="7" route="wechat">
        <img src="../assets/images/slider7.png" alt="">
        <span slot="title">微信</span>
      </el-menu-item>
      <el-menu-item index="8" route="login">
        <img src="../assets/images/slider8.png" alt="">
        <span slot="title">落地宝</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>

<script>
  export default {
    data () {
      return {
        isCollapse: false,
        isRoute: true,
        screenWidth: document.body.clientWidth
      }
    },
    mounted () {
      const that = this
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          that.screenWidth = window.screenWidth
        })()
      }
    },
    methods: {
      toggleMenu() {
        this.isCollapse = !this.isCollapse;
      }
    },
    watch: {
      screenWidth (val) {
        this.screenWidth = val
        if (this.screenWidth <= 768) {
          this.isCollapse = true;
        } else {
          this.isCollapse = false;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
@import  "../assets/scss/baseFunction";
.menu-head-img{
  padding:  10px 0;
  text-align: center;
  img{
    width: 60px;
    border-radius: 50%;
  }
  .sx-img{
    width: 30px;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  // min-height: 300px;
}
.el-menu-item{
  &:hover{
    background: $blueColor !important;
    color: #fff;
  }
  img{
    width: 20px;
    margin-right: 10px;
  }
}
.el-menu-item.is-active {
  background: $blueColor !important;
}
</style>
