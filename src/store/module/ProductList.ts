import { ProductListState } from '@/types/views/ProductList.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as ProductListApi from '@/api/ProductList'

const state: ProductListState = {
  author: ''
}

// 强制使用getter获取state
const getters: GetterTree<ProductListState, any> = {
  author: (state: ProductListState) => state.author
}

// 更改state
const mutations: MutationTree<ProductListState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: ProductListState, data: ProductListState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      state[key] = data[key]
    }
  }
}

const actions: ActionTree<ProductListState, any> = {
  UPDATE_STATE_ASYN({ commit, state: ProductListState }, data: ProductListState) {
    commit('UPDATE_STATE', data)
  },
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   ProductList.getData()
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}

