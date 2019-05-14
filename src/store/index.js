import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import actions from "./actions";
import * as getters from "./getters";
import mutations from "./mutations";
import logger from "vuex/dist/logger"

Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
    plugins: [logger()]
});
export default store;