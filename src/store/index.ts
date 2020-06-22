import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
// modules
import admin from './module/index'
// import Index from './module/index'
Vue.use(Vuex)

export default new Vuex.Store({
  // 数据持久化插件
  plugins: [createPersistedState({
    reducer(state) {
      return {
        admin: {
          login: {
            token: state.admin.login.token,
            info: state.admin.login.info,
            menutitle: state.admin.login.menutitle,
            childrenMenu: state.admin.login.childrenMenu,
          },
          index: {
            token: state.admin.index.author,
          }
        }
      }
    }
  })
 ],
  modules: {
    admin
  }
})
