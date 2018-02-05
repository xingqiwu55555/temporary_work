<template>
  <div class="league">
    <Head />
    <Slide />
    <SwiperMain :imgUrl="leagueBanner"/>
    <Titlesub title="技术支持" subtitle="强大的研发实力，安全稳定可靠的系统支持"/>
    <div class="support-swiper">
      <swiper :options="swiperOption_support" ref="mySwiper">
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <Titlesub title="小程序应用广泛" subtitle="丰富模板、组件库满足您的修改化需求，完没兼容小程序和公众号"/>
    <div class="threeimg">
      <img src="../assets/images/league/threeimg.png" alt="">
    </div>
    <div class="vedio-box">
      <img src="../assets/images/league/vedio.jpg" class="vedio-bg" alt="">
      <div class="vedio-wrap">
        <img src="../assets/images/league/pause.png" alt="">
      </div>
    </div>

    
    <div class="industry-box">
      <p class="title">适用行业</p>
      <ul class="box">
        <li class="industry-server" 
          v-for="(item, i) in industryArr"
          :key="i" :class="{'margin-left': i > 0, 'active': industryIndex==i}"
          @click="clickIndustry(i)"

        >
          <div class="box-wrap">
            <img :src="item.imgUrl" alt="">
            <p>{{item.title}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="map-box">
      <div class="map-lf lf">
        <div class="map-top clear">
          <img src="../assets/images/league/logoz.png" class="lf">
          <div class="network lf">
            <h1>中天网络</h1>
            <p>www.baidu.com</p>
          </div>
          <h5  class="lf">小程序生成平台</h5>
        </div>
        <h6>现诚招各区域代理商加盟</h6>
        <p class="text">电话：400-005-9966</p>
        <p class="text">地址：河南省郑州市郑东新区绿地新都会2号楼A座18层</p>
      </div>
      <div class="map-rt rt">
        <img src="../assets/images/league/map.png" alt="">
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
import Foot from '../components/Foot'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    Head,
    Slide,
    Titlesub,
    SwiperMain,
    Foot,
    swiper,
    swiperSlide
  },
  data () {
    return {
      leagueBanner: [
        require('../assets/images/league/league-banner1.jpg'),
        require('../assets/images/league/league-banner1.jpg'),
        require('../assets/images/league/league-banner1.jpg'),
        require('../assets/images/league/league-banner1.jpg'),
        require('../assets/images/league/league-banner1.jpg')
      ],
      swiperOption_support: {
        slidesPerView: 5,
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        virtual: {
          slides: (function () {
            const slides = [];
            for (let i = 1; i < 8; i += 1) {
              const imgUrl = require('../assets/images/league/support-banner'+ i +'.png');
              slides.push(`<div class="slide-img"><img src="${imgUrl}"/></div><div class="slide-text">稳定系统保障</div></div>`);
            }
            return slides
          }())
        }
      },
      industryArr: [
        {title: '生活服务', imgUrl: require('../assets/images/league/industry1.png')},
        {title: '企业官网', imgUrl: require('../assets/images/league/industry2.png')},
        {title: '行业资讯', imgUrl: require('../assets/images/league/industry3.png')},
        {title: '商场', imgUrl: require('../assets/images/league/industry4.png')},
        {title: '更多', imgUrl: require('../assets/images/league/industry5.png')}
      ],
      industryIndex: -1
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    clickIndustry(index){
      this.industryIndex = index;
    }
  }
}
</script>

<style lang="scss" >
@import  "../assets/scss/league";
</style>
