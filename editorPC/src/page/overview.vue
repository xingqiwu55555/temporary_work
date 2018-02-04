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
        <el-row :gutter="10">
          <el-col :xs="24" :sm="18" :md="18" :lg="18">
            <div class="grid-content bg-purple">
              <OverViewTable />
              <OverViewVersion />
              <OverViewApp />
            </div>
          </el-col>
          <el-col :xs="24" :sm="6" :md="6" :lg="6">
            <div class="grid-content bg-purple">
              <OverViewRight />
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24">
            <div class="grid-content bg-purple">
              <OverViewFeed />
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
import OverViewTable from '../components/OverViewTable'
import OverViewVersion from '../components/OverViewVersion'
import OverViewApp from '../components/OverViewApp'
import OverViewRight from '../components/OverViewRight'
import OverViewFeed from '../components/OverViewFeed'
export default {
  components: {
    Aside,
    Head,
    OverViewTable,
    OverViewVersion,
    OverViewApp,
    OverViewRight,
    OverViewFeed
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
.overview-shadow{
  -moz-box-shadow:0px 0px 10px #e3e3e3; 
  -webkit-box-shadow:0px 0px 10px #e3e3e3; 
  box-shadow:0px 0px 10px #e3e3e3;
  box-sizing: border-box;
}
.overview-title{
  text-align: left;
  line-height: 40px;
  font-size: 16px;
  color: $blueColor;
  padding-left: 10px;
}
</style>
