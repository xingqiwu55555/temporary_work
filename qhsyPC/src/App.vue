<template>
  <div id="app">
    <Heat></Heat>
    <Asides></Asides>
    <div class="dislpayArrow hidden-xs"><a class="pngfix" href="javascript:void(0);" onClick="displaynavbar(this)"></a></div>
    <section class="Hui-article-box">
      <BreadCrumb ></BreadCrumb>
      <div class="Hui-article">
        <router-view></router-view>
        <Foot ></Foot>
      </div>
    </section>
    
  </div>
</template>

<script>
import Heat from './components/Heat'
import Foot from './components/Foot'
import BreadCrumb from './components/BreadCrumb'
import Asides from './components/Asides'
import Page from './components/Page'

export default {
  name: 'app',
  components: {
    Heat, Foot, BreadCrumb, Asides
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.dislpayArrow a {
    background: url(./assets/images/icon_arrow.png) no-repeat 0 0;
}
</style>