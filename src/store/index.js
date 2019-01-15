/*
* @Author: Vera
* @Date:   2018-11-28 20:40:15
* @Last Modified by:   Vera
* @Last Modified time: 2018-12-05 09:49:12
*/
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations
})
