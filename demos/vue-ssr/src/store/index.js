import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { fetchPostItem } from '../api'

export function createStore() {
  return new Vuex.Store({
    state: {
      items: {}
    },
    actions: {
      async fetchItem({ commit }, id) {
        const { data } = await fetchPostItem(id)
        commit('setPosts', data);
      }
    },
    mutations: {
      setItem(state, item) {
        Vue.set(state.items, item.id, item)
      }
    }
  })
}