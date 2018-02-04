<template>
  <el-menu :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    text-color="#36393b"
    active-text-color="#52a2f4"
    :router="isRoute"
  >
    <el-menu-item index="1" route="login">店铺认证</el-menu-item>
    <el-menu-item index="2" route="login">套餐升级</el-menu-item>
    <el-submenu index="3">
      <template slot="title">畅新</template>
      <el-menu-item index="3-1" route="login">选项1</el-menu-item>
      <el-menu-item index="3-2" route="login">选项2</el-menu-item>
      <el-menu-item index="3-3" route="login">选项3</el-menu-item>
    </el-submenu> 
  </el-menu>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '1',
        isRoute: true
      }
    },
    methods:{
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss" scoped>
.el-menu--horizontal{
  border: none;
  float: right;
}
</style>
