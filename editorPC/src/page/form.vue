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
        <FormNoList />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from '../components/Aside'
import Head from '../components/Head'
import FormNoList from '../components/FormNoList'

export default {
  components: {
    Aside,
    Head,
    FormNoList
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
