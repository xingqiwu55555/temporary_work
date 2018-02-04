<template>
  <div class="board">
    <div class="board-box board-box-active">
      <p class="board-title"><span>工具</span></p>
      <el-row :gutter="20">
        <el-col :xs="12" :sm="12" :md="12" :lg="12">
          <div class="grid-content bg-purple">
            <img src="../assets/images/app1.png" alt="">
            <span>素材盒</span>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="12">
          <div class="grid-content bg-purple">
            <img src="../assets/images/app1.png" alt="">
            <span>素材盒</span>
          </div>
        </el-col>
        
      </el-row>
    </div>
    <div class="board-box">
      <p class="board-title"><span>工具</span></p>
      <el-row :gutter="20">
        <el-col :xs="12" :sm="12" :md="12" :lg="12">
          <div class="grid-content bg-purple">
            <img src="../assets/images/app1.png" alt="">
            <span>素材盒</span>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="12">
          <div class="grid-content bg-purple">
            <img src="../assets/images/app1.png" alt="">
            <span>素材盒</span>
          </div>
        </el-col>
        
      </el-row>
    </div>
    <div class="board-box">
      <p class="board-title"><span>工具</span></p>
      <el-row :gutter="20">
        <el-col :xs="12" :sm="12" :md="12" :lg="12">
          <div class="grid-content bg-purple">
            <img src="../assets/images/app1.png" alt="">
            <span>素材盒</span>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="12">
          <div class="grid-content bg-purple">
            <img src="../assets/images/app1.png" alt="">
            <span>素材盒</span>
          </div>
        </el-col>
        
      </el-row>
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
@import  "../assets/scss/_baseFunction";
.board{
  border: 1px solid #dcdcdc;
  padding: 0 20px;
  .board-title{
    line-height: 40px;
    font-size: 16px;
    font-weight: bold;
    color: #58585a;
    margin-bottom: 20px;
    span{
      display: inline-block;
    }
  }
  .board-box{
    margin-bottom: 10px;
    &.board-box-active{
      .board-title span{
        border-bottom: 2px solid $blueColor;
      }
    }
  }
  .grid-content{
    border-radius: 10px;
    border: 1px solid #dfdfdf;
    padding: 10px 0;
    text-align: center;
    &:hover{
      background: #f8f8f8;
    }
    img{
      vertical-align: middle;
      margin-right: 20px;
      width: 30%;
      max-width: 100px;
    }
    span{
      vertical-align: middle;
      font-size: 16px;
    }
  }
}
</style>
