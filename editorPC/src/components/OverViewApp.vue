<template>
  <el-row class="app overview-shadow">
    <div class="overview-title">常用应用</div>
    <el-col class="app-box" :xs="4" :sm="4" :md="4" :lg="4">
      <img src="../assets/images/app1.png" alt="">
      <p>素材库</p>
    </el-col>
    <el-col class="app-box" :xs="4" :sm="4" :md="4" :lg="4">
      <img src="../assets/images/app2.png" alt="">
      <p>素材库</p>
    </el-col>
    <el-col class="app-box" :xs="4" :sm="4" :md="4" :lg="4">
      <img src="../assets/images/app2.png" alt="">
      <p>素材库</p>
    </el-col>
    <el-col class="app-box" :xs="4" :sm="4" :md="4" :lg="4">
      <img src="../assets/images/app2.png" alt="">
      <p>素材库</p>
    </el-col>
    <el-col class="app-box" :xs="4" :sm="4" :md="4" :lg="4">
      <img src="../assets/images/app2.png" alt="">
      <p>素材库</p>
    </el-col>
    <el-col class="app-box" :xs="4" :sm="4" :md="4" :lg="4">
      <img src="../assets/images/app2.png" alt="">
      <p>素材库</p>
    </el-col>
  </el-row>
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
@import  "../assets/scss/_baseFunction";
.app{
  margin-top: 20px;
  text-align: center;
  img{
    width: 80%;
    max-width: 117px;
  }
  p{
    font-size: 14px;
    line-height: 30px;
  }
  .app-box{
    padding: 10px 0;
  }
}
</style>
