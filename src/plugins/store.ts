import vue from "vue";
import Vuex from "vuex";

vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLog: false,
  },
    mutations: {
      nowLog: function (state, { val }) {
        state.isLog = val;
      },
    },
});
