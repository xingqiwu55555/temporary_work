<template lang="html">
  <aside class="Hui-aside">
    <div class="menu_dropdown bk_2">
      <dl id="menu-article">
        <dt><i class="Hui-iconfont">&#xe616;</i> 比赛管理<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
        <dd>
          <ul>
            <li :class="{current:routerName=='GameList'}"><a @click="skipPage('GameList')" title="比赛列表">比赛列表</a></li>
            <li :class="{current:routerName=='NewGame'}"><a @click="skipPage('NewGame')" title="新建比赛">新建比赛</a></li>
          </ul>
        </dd>
      </dl>
      <dl id="menu-picture">
        <dt><i class="Hui-iconfont">&#xe613;</i> 专网用户管理<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
        <dd>
          <ul>
            <li :class="{current:routerName=='Internat'}"><a @click="skipPage('Internat')" title="专网用户管理">专网用户管理</a></li>
          </ul>
        </dd>
      </dl>
      <dl id="menu-product">
        <dt><i class="Hui-iconfont">&#xe620;</i> 积分管理 <i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
        <dd>
          <ul>
            <li :class="{current:routerName=='PointManage'}"><a @click="skipPage('PointManage')" title="积分管理">积分管理</a></li>
          </ul>
        </dd>
      </dl>
      <dl id="menu-comments">
        <dt><i class="Hui-iconfont">&#xe622;</i> 用户管理<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
        <dd>
          <ul>
            <li :class="{current:routerName=='UserList'}"><a @click="skipPage('UserList')" title="用户列表">用户列表</a></li>
            <li :class="{current:routerName=='BirthGift'}"><a @click="skipPage('BirthGift')" title="会员生日福利">会员生日福利</a></li>
          </ul>
        </dd>
      </dl>
      <dl id="menu-member">
        <dt><i class="Hui-iconfont">&#xe60d;</i> 商城后台<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
        <dd>
          <ul>
            <li :class="{current:routerName=='NewProduct'}"><a @click="skipPage('NewProduct')" title="商品添加">商品添加</a></li>
            <li :class="{current:routerName=='OrderList'}"><a @click="skipPage('OrderList')" title="订单列表">订单列表</a></li>
          </ul>
        </dd>
      </dl>	
    </div>
  </aside>
</template>

<script>
export default {
  name: "Asides",
  data () {
    return {
      routerName: ''
    }
  },
  create () {
    this.routerName = this.$router.name;
  },
  methods: {
    skipPage (name) {
      this.$router.push({ name: name })
    }
  },
  watch: {
    $route (val, oldVal) {
      this.routerName = val.name;
    }
  }
}
</script>
<style lang="scss">
.navbar-logo, .navbar-logo-m, .navbar-slogan, .navbar-userbar {
    color: #fff;
}
.navbar-nav > ul > li, .navbar-nav > ul > li > a {
    color: #fff;
}
.Hui-aside .menu_dropdown dt:hover{
  color: #2d6dcc;
}
.Hui-aside .menu_dropdown li.current a, .menu_dropdown li.current a:hover {
    background-color: rgba(255,255,255,0.6);
    color: #2d6dcc;
}
</style>
