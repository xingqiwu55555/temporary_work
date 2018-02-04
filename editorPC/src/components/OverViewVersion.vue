<template>
  <el-row :gutter="10" style="margin-top: 20px;">
    <el-col :xs="12" :sm="12" :md="12" :lg="12">
      <div class="grid-content bg-purple version-box version-lf">
      <h2 class="title">目前版本：基础版</h2>
      <dl class="info">
        <dt>升级到商务版将解锁使用一下服务：</dt>
        <dd>-装修：全部官方模板、更改版权</dd>
        <dd>-表单：全部表单线索</dd>
        <dd>-数据：全方位数据分析</dd>
        <dd>-应用：全部常用应用</dd>
        <dd>-素材库：不限图片数</dd>
      </dl>
      
      <div class="btn">
        <p>为了您能获得更好的体验，我们建议您</p>
        <div>购买商务版</div>
      </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="12">
      <div class="grid-content bg-purple version-box version-rt">
      <h2 class="title">目前版本：豪华版</h2>
      <dl class="info">
        <dt>升级到商务版将解锁使用一下服务：</dt>
        <dd>-装修：全部官方模板、更改版权</dd>
        <dd>-表单：全部表单线索</dd>
        <dd>-数据：全方位数据分析</dd>
        <dd>-应用：全部常用应用</dd>
        <dd>-素材库：不限图片数</dd>
      </dl>
      <div class="btn">
        <p>为了您能获得更好的体验，我们建议您</p>
        <div>购买豪华版</div>
      </div>
      </div>
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
.version-box{
  border: 2px solid #fff;
  box-shadow: border-box;
  padding: 10px;
  text-align: center;
  .title{
    font-size: 16px;
    line-height: 40px;
  }
  &.version-lf{
    border-color: $blueColor;
    .title{
      color: $blueColor;
    }
    .btn{
      div{ background-image: url(../assets/images/buy-btn1.png); }
    }
  }
  &.version-rt{
    border-color: $orangeColor;
    .title{
      color: $orangeColor;
    }
    .btn{
      div{ background-image: url(../assets/images/buy-btn2.png); }
    }
  }
  .info{
    font-size: 12px;
    line-height: 26px;
    dd{
      text-align: left;
      padding: 0 5%;
    }
  }
  .btn{
    margin-top: 10px;
    font-size: 12px;
    line-height: 30px;
    div{
      width: 80%;
      margin: 0 auto;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      color: #fff;
      font-size: 16px;
      padding: 4px 0;
    }
  }
}
</style>
