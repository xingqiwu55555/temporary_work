import Vuex from 'vuex';
import Vue from 'vue'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

var state = {
  title: '云新闻',
  showmenu: true,
  showback: false,
  msg: true,
  isshowf: true,
  username: ''
}
var  mutations = {
  details (state, data) {
    state.title = data.data || state.title
    state.showmenu = data.fa
    state.showback = data.fb
    state.msg = data.fc
  },
  hidfooter (state, flag) {
    state.isshowf = flag
  },
  setUser (state, name) {
    state.username = name;
  }
}

export default new Vuex.Store({
  state,
  mutations,
  strict: debug
})