import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    aa: "ddd"
  },
  mutations:{
    setstate(state,data){
      state.aa = data
    }
  },
  plugins: [createPersistedState()]
})

export default store
