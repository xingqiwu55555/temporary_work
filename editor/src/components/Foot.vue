<template>
  <div class="foot">
    <p class="copy">Copyright2017 Takecloud Inc.All Rights Reserved沪ICP备 17002272-1号</p>
    <p class="company">上海微庚信息科技有限公司</p>
    <ul class="channle">
      <li>
        <img src="../assets/images/weibo.png" alt="">
      </li>
      <li>
        <img src="../assets/images/wechat.png" alt="">
      </li>
      <li>
        <img src="../assets/images/qq.png" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props:['title', 'subtitle'],
    data () {
      return {}
    },
    methods:{
      
    }
  }
</script>

<style lang="scss" scoped>
@import  "../assets/scss/_baseFunction";
.foot{
  height: 222px;
  background: #303235;
  width: 100%;
  text-align: center;
  color: $fdColor;
  .copy{
    padding-top: 44px;
  }
  .company{
    padding: 26px 0 40px;
  }
  .channle{
    width: 600px;
    margin: 0 auto;
    li{
      float: left;
      width: 33.33%;
      text-align: center;
    }
  }
}
</style>
