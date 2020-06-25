import { RenovationListState } from '@/types/views/RenovationList.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
// 搭建系统存储
const state: RenovationListState = {
  author: ''
}

// 强制使用getter获取state
const getters: GetterTree<RenovationListState, any> = {
  author: (state: RenovationListState) => state.author
}

// 更改state
const mutations: MutationTree<RenovationListState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: RenovationListState, data: RenovationListState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      state[key] = data[key]
    }
  }
}

const actions: ActionTree<RenovationListState, any> = {
  UPDATE_STATE_ASYN({ commit, state: RenovationListState }, data: RenovationListState) {
    commit('UPDATE_STATE', data)
  },
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   RenovationList.getData()
  // }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

