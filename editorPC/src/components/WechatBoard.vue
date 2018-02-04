<template>
  <div class="board">
    <div class="board-box board-box-active">
      <p class="board-title"><span>工具</span></p>
      <el-row :gutter="20">
        <el-col :xs="5" :sm="5" :md="5" :lg="5">
          <div class="grid-content bg-purple grid-lf">
            使用指南
          </div>
        </el-col>
        <el-col :xs="19" :sm="19" :md="19" :lg="19">
          <div class="grid-content bg-purple grid-rt">
            <dl>
              <dt>授权说明</dt>
              <dd>1、一个微信小程序仅可授权给一个微盟商户（如小店、客来店、智店等）；</dd>
              <dd>2、位保证所有功能的正常使用，授权时请保持默认选择，把权限统一授权给微盟；</dd>
              <dd>3、新授权的小程序需与已授权的小程序及公众号主体一致；</dd>
              <dd>4、您在该入口授权的公众账号类型为小程序，请在授权页面正确选择。</dd>
            </dl>
            <dl style="margin-top: 40px; ">
              <dt>小程序类型</dt>
              <dd>1、企业类型账号，可以根据需要确定是否申请微信认证<br/>（认证入口：登录小程序——设置——基本设置——微信认证——详情）</dd>
              <dd>2、已认证账号可使用微信支付权限，个人类型账号暂不支持微信认证。</dd>
            </dl>

            <div class="process-box">
              <p class="process-title">暂未授权</p>
              <el-button type="primary" >提交</el-button>
              <div class="process-notice">未注册小程序，<span>立即申请</span></div>
            </div>
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
  .grid-rt{
    dl{
      font-size: 14px;
      line-height: 24px;
    }
    dd{
      padding: 5px 0;
    }
  }
  .process-box{
    text-align: center;
    .process-title{
      font-size: 16px;
      margin: 40px auto 20px;
    }
    .el-button{
      width: 40%;
    }
    .process-notice{
      font-size: 14px;
      line-height: 60px;
      span{
        color: $blueColor;
      }
    }
  }
}
</style>
