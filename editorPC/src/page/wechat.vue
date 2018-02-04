<template>
  <el-container style="height:100vh;">
    <el-aside style="background-color: #222430"
      text-color="#fff"
      width="auto"
    >
      <Aside />
    </el-aside>
    <el-container>
      <el-header><Head /></el-header>
      <el-main>
        <el-row :gutter="40">
          <el-col :xs="24" :sm="6" :md="6" :lg="6">
            <div class="grid-content bg-purple">
              <p class="wechat-title">小程序</p>
              <el-select type="primary" placeholder="小程序管理">
                <el-option label="小程序设置" value="tool"></el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :xs="24" :sm="18" :md="18" :lg="18">
            <div class="grid-content bg-purple">
              <WechatBoard />
            </div>
          </el-col>
          
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from '../components/Aside'
import Head from '../components/Head'
import WechatBoard from '../components/WechatBoard'

export default {
  components: {
    Aside,
    Head,
    WechatBoard
  },
  data () {
    return {
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss">
@import  "../assets/scss/baseFunction";
.wechat-title{
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  font-weight: bold;
  color: #58585a;
  margin-bottom: 10px;
}
.el-input__inner{
  background: $blueColor;
  border: none;
  color: #fff;
  &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      color: #fff; opacity:1; 
  }

  &::-moz-placeholder { /* Mozilla Firefox 19+ */
      color: #fff;opacity:1;
  }

  &:-ms-input-placeholder{
      color: #fff; opacity:1;
  }

  &::-webkit-input-placeholder{
      color: #fff; opacity:1;
  }
}
.el-select .el-input .el-select__caret{ color: #fff; }
</style>
