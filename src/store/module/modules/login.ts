import { LoginState } from '@/types/views/login.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
// import * as LoginApi from '@/api/login'

const state: LoginState = {
  // 登录之后存储的会员信息
  info: '',
  // 登录时存储
  token: '',
  // 当前选中的一级导航名称
  menutitle: '',
  // 二级导航
  childrenMenu: '',
  // 当前页面的url
  UrlLink: '',
}

// 强制使用getter获取state
const getters: GetterTree<LoginState, any> = {
  info: (state: LoginState) => state.info,
  menutitle: (state: LoginState) => state.menutitle,
  childrenMenu: (state: LoginState) => state.childrenMenu,
  UrlLink: (state: LoginState) => state.UrlLink,
}

// 更改state
const mutations: MutationTree<LoginState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: LoginState, data: LoginState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      state[key] = data[key]
    }
  }
}

const actions: ActionTree<LoginState, any> = {
  UPDATE_STATE_ASYN({ commit, state: LoginState }, data: LoginState) {
    commit('UPDATE_STATE', data)
  },
  GET_DATA_ASYN({ commit, state: LoginState}, Ginseng: any) {
    console.log(Ginseng);
    // LoginApi.getData(Ginseng).then(res => {
    //   commit('UPDATE_STATE')
    // })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

