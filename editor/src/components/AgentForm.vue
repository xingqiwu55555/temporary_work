<template>
  <div class="agentform">
    <div class="form">
      <div class="form-label">代理类型：</div>
      <div class="form-input form-radio">
        <label class="active">
          一级代理商
        </label>
        <label>
          二级代理商
        </label>
      </div>
    </div>
    <div class="form">
      <div class="form-label">您的姓名：</div>
      <div class="form-input form-text">
        <input type="text">
      </div>
    </div>
    <div class="form">
      <div class="form-label">您的电话：</div>
      <div class="form-input form-text">
        <input type="text">
      </div>
    </div>
    <div class="form">
      <div class="form-label">您的QQ：</div>
      <div class="form-input form-text">
        <input type="text">
      </div>
    </div>
    <div class="form">
      <div class="form-label">所在区域：</div>
      <div class="form-input form-select">
        <label class="addr-prevince">
          <p>黑龙江省</p>
          <ul>
            <li></li>
          </ul>
        </label>
        <label class="addr-city">
          <p>选择市</p>
          <ul>
            <li>选择市</li>
          </ul>
        </label>
      </div>
    </div>
    <div class="form">
      <div class="form-label">主营业务：</div>
      <div class="form-input form-text">
        <input type="text">
      </div>
    </div>
    <div class="form">
      <div class="form-label">客户群体：</div>
      <div class="form-input form-text">
        <input type="text">
      </div>
    </div>
    <div class="form">
      <div class="form-label">营销计划：</div>
      <div class="form-input form-textarea">
        <textarea></textarea>
      </div>
    </div>
    <div class="form">
      <div class="form-label"> </div>
      <div class="form-input form-btn">
        <button>立即加入</button>
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
@import  "../assets/scss/_baseFunction";

$inputWidth: 430px;
$inputHeight: 44px;
.agentform{
  width: 580px;
  margin: 0 auto 40px;
  .form{
    color: $minColor;
    margin-top: 20px;
    &:after{
      content: "";
      display: block;
      clear: both;
    }
  }
  .form-label{
    float: left;
    line-height: 44px;
    height: 44px;
    width: 100px;
  }
  .form-input{
    float: left;
    color: $minColor;
  }
  .form-radio{
    label{
      display: inline-block;
      width: 200px;
      text-align: center;
      line-height: 44px;
      position: relative;
      &:before{
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: 36px;
        margin-top: -7px;
        width: 14px;
        height: 14px;
        box-sizing: border-box;
        border-radius: 50%;
        border: 3px solid $blueColor;
      }
      &:hover{
        &:before{
          background: $blueColor;
        }
      }
    }
    .active{
      &:before{
        background: $blueColor;
      }
    }
  }
  .form-text{
    input{
      width: $inputWidth;
      height: $inputHeight;
      box-sizing: border-box;
      border-radius: 8px;
      border: 2px solid #c9c9c9;
      padding: 5px 10px;
      color: $minColor;
      &:focus{
        border-color: $blueColor;
      }
    }
  }
  .form-textarea{
    textarea{
      width: $inputWidth;
      box-sizing: border-box;
      border-radius: 8px;
      border: 2px solid #c9c9c9;
      padding: 5px 10px;
      color: $minColor;
      min-height: 160px;
      resize: none;
      &:focus{
        border-color: $blueColor;
      }
    }
  }
  .form-btn{
    button{
      height: 50px;
      color: #fff;
      background: $blueColor;
      border-radius: 8px;
      width: $inputWidth;
      box-sizing: border-box;
      border: none;
      font-size: 18px;
      &:active,&:hover{
        background: $dblueColor;
      }
    }
  }
  .form-select{
    label{
      display: inline-block;
      width: 200px;
      text-align: center;
      box-sizing: border-box;
      line-height: 44px;
      height: 44px;
      position: relative;
      vertical-align: middle;
    }
    .addr-prevince{
      border-radius: 8px;
      background: $blueColor;
      z-index: 10;
      width: 210px;
      p{
        color: #fff;
      }
    }
    .addr-city{
      width: 225px;
      border: 2px solid #c9c9c9;
      border-left: none;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      margin-left: -12px;
      p{
        color: $minColor;
      }
    }
    ul{
      position: absolute;
      width: 100%;
    }
  }
}
</style>
