<template>
  <div class="league">
    <Head />
    <Slide />
    <div class="league-swiper">
      <swiper :options="swiperOption_league">
        <swiper-slide class="slide-1">
          <img src="../assets/images/league/league-banner1.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="slide-2">
          <img src="../assets/images/league/league-banner1.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="slide-3">
          <img src="../assets/images/league/league-banner1.jpg" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      </swiper>
    </div>
    <Titlesub title="技术支持" subtitle="强大的研发实力，安全稳定可靠的系统支持"/>
    <div class="support-swiper">
      <swiper :options="swiperOption_support" ref="mySwiper">
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <Titlesub title="小程序应用广泛" subtitle="丰富模板、组件库满足您的修改化需求，完没兼容小程序和公众号"/>
    <Foot />
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
        <li class="industry-server">
          <div class="box-wrap">
            <img src="../assets/images/league/industry1.png" alt="">
            <p>生活服务</p>
          </div>
        </li>
        <li class="industry-company">
          <div class="box-wrap">
            <img src="../assets/images/league/industry2.png" alt="">
            <p>企业官网</p>
          </div>
        </li>
        <li class="industry-news">
          <div class="box-wrap">
            <img src="../assets/images/league/industry3.png" alt="">
            <p>行业资讯</p>
          </div>
        </li>
        <li class="industry-mark">
          <div class="box-wrap">
            <img src="../assets/images/league/industry4.png" alt="">
            <p>商场</p>
          </div>
        </li>
        <li class="industry-more">
          <div class="box-wrap">
            <img src="../assets/images/league/industry5.png" alt="">
            <p>更多</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Head from '../components/Head'
import Slide from '../components/Slide'
import Titlesub from '../components/Titlesub'
import Foot from '../components/Foot'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    Head,
    Slide,
    Titlesub,
    Foot,
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption_league: {
        spaceBetween: 30,
        effect: 'fade',
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
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
            const imgUrl = require('../assets/images/league/support-banner1.png');
            for (let i = 0; i < 5; i += 1) {
              slides.push(`<div class="slide-img"><img src="${imgUrl}"/></div><div class="slide-text">稳定系统保障</div></div>`);
            }
            return slides
          }())
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
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
@import  "../assets/scss/league";
</style>
