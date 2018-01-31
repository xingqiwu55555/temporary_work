<template>
  <div class="template">
    <Head />
    <SwiperMain :imgUrl="templateBanner"/>
    <div class="template-box">
      <ul class="tab-bar clear">
        <li class="active">全部</li>
        <li>电商</li>
        <li>医疗</li>
        <li>美容</li>
        <li>免费</li>
        <li>个人</li>
        <li>企业</li>
      </ul>
      <div class="content clear">
        <div class="content-lf lf">
          <img src="../assets/images/template/template1.png" class="template-img">
          <div class="wrap">
            <img src="../assets/images/template/erweima.png" alt="">
            <p>医疗救助</p>
          </div>
        </div>
        <div class="content-rt rt">
          <img src="../assets/images/template/template2.png" class="template-img">
          <div class="wrap">
            <img src="../assets/images/template/erweima.png" alt="">
            <p>医疗救助</p>
          </div>
        </div>
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
      templateBanner: [
        require('../assets/images/league/league-banner1.jpg'),
        require('../assets/images/league/league-banner1.jpg'),
        require('../assets/images/league/league-banner1.jpg'),
        require('../assets/images/league/league-banner1.jpg')
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
@import  "../assets/scss/template";
</style>
