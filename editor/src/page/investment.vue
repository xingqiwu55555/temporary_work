<template>
  <div class="investment">
    <Head />
    <SwiperMain :imgUrl="investBanner"/>
    <div class="college-box">
      <p class="title">东亚商学院，扶持创业，帮忙落地</p>
      <img src="../assets/images/investment/college.png" alt="">
      <ul class="text-box clear">
        <li>
          <h5>0门槛合作</h5>
          <p>无需加盟费保证金</p>
        </li>
        <li>
          <h5>投入39800</h5>
          <p>40倍高收益回报</p>
        </li>
      </ul>
    </div>

    <div class="system-box">
      <p class="title">8大加盟体系</p>
      <ul class="clear">
        <li class="active">
          <div></div>
          <h6>小程序支持</h6>
          <p>小程序针对行业<br/>特性专属定制</p>
        </li>
        <li>
          <div></div>
          <h6>小程序支持</h6>
          <p>小程序针对行业<br/>特性专属定制</p>
        </li>
        <li>
          <div></div>
          <h6>小程序支持</h6>
          <p>小程序针对行业<br/>特性专属定制</p>
        </li>
        <li>
          <div></div>
          <h6>小程序支持</h6>
          <p>小程序针对行业<br/>特性专属定制</p>
        </li>
        <li>
          <div></div>
          <h6>小程序支持</h6>
          <p>小程序针对行业<br/>特性专属定制</p>
        </li>
        <li>
          <div></div>
          <h6>小程序支持</h6>
          <p>小程序针对行业<br/>特性专属定制</p>
        </li>
        <li>
          <div></div>
          <h6>小程序支持</h6>
          <p>小程序针对行业<br/>特性专属定制</p>
        </li>
        <li>
          <div></div>
          <h6>小程序支持</h6>
          <p>小程序针对行业<br/>特性专属定制</p>
        </li>
      </ul>
    </div>
    <div class="pk-box">
      <div class="pk-wrap">
      <p class="title">小程序系统<span>火热招商</span>加盟中</p>
      <p class="title">区别于同行代理模式，高达<span>50-100</span>倍的利润空间</p>
      <ul class="clear">
        <li class="pk-content pk-lf">
          <div>
            <span class="pk-name">中天科技</span>
            <img src="../assets/images/investment/good.png" alt="">
          </div>
          <p>一次投入终身维护项目不断更新迭代囊括公众网页小程序三位一体</p>
          <p>投入成本低于同行价格，按当前市场最低销售标准，50倍回报，利润可30-50倍</p>
          <p>品牌独立，代理可自主定价和运营无需为利益担忧抢占互联网新机遇，机会稍纵即逝</p>
        </li>
        <li class="pk-img">
          <img src="../assets/images/investment/vs.png" alt="">
        </li>
        <li class="pk-content pk-rt">
          <div>
            <img src="../assets/images/investment/bad.png" alt="">
            <span class="pk-name">其它</span>
          </div>
          <p>只出售账户，系统创造性，主动性收到限制，盈利空间受限</p>
          <p>无独立品牌，容易被追溯源头，总部的利益优先于加盟商</p>
          <p>加盟产品投资本高达幅增加利润额度有难度</p>
        </li>
      </ul>
      </div>
    </div>

    <Foot />
  </div>
</template>

<script>
import Head from '../components/Head'
import Slide from '../components/Slide'
import Titlesub from '../components/Titlesub'
import SwiperMain from '../components/SwiperMain'
import AgentForm from '../components/AgentForm'
import Foot from '../components/Foot'
export default {
  components: {
    Head,
    Slide,
    Titlesub,
    AgentForm,
    Foot,
    SwiperMain
  },
  data () {
    return {
      investBanner: [
        require('../assets/images/investment/invest_banner1.jpg'),
        require('../assets/images/investment/invest_banner1.jpg'),
        require('../assets/images/investment/invest_banner1.jpg'),
        require('../assets/images/investment/invest_banner1.jpg')
      ]
    }
  },
  methods: {
    showModel(type){
      this.setType = type;
    }
  }
}
</script>

<style lang="scss">
@import  "../assets/scss/investment";
</style>
