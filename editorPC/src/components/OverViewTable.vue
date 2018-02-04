<template>
  <div class="content-table overview-shadow">
  <table class="overview-table">
    <caption>下午好，畅新的店铺</caption>
    <tbody>
      <tr>
        <td><label>今日新增人数</label><span>10人</span></td>
        <td><label>今日访问次数</label><span>99次+</span></td>
        <td><label>今日访问人数</label><span>5人</span></td>
      </tr>
      <tr>
        <td><label>昨日新增人数</label>0</td>
        <td><label>昨日访问次数</label>0</td>
        <td><label>昨日访问人数</label>0</td>
      </tr>
      <tr>
        <td><label>累计用户数</label>0</td>
        <td><label>访问总次数</label>0</td>
        <td><label>访问总人数</label>0</td>
      </tr>
      <tr>
        <td colspan="3" height="40"></td>
      </tr>
      <tr>
        <td><label>今日提交表单</label><span>10人</span></td>
        <td><label>今日转发次数</label>10次</td>
        <td><label>人均停留时长</label><span>30分钟</span></td>
      </tr>
      <tr>
        <td><label>昨日提交表单</label>0</td>
        <td><label>昨日转发次数</label>0</td>
        <td><label>次停留时长</label>0</td>
      </tr>
      <tr>
        <td><label>累计提交表单</label>0</td>
        <td><label>总转发次数</label>2次</td>
        <td><label>平均访问深度</label>0</td>
      </tr>
    </tbody>
  </table>
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
.content-table{
  padding: 10px;
}
.overview-table{
  width: 100%;
  border-collapse: collapse;
  caption{
    text-align: left;
    margin-bottom: 40px;
  }
  label{
    width: 110px;
    display: inline-block;
  }
  td{
    line-height: 44px;
    span{
      color: $blueColor;
    }
  }
}
</style>
