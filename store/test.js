import {GET_TEST} from "@/types";

export const state = () => ({
  test: ['dale', 'sin', 'peo']
});

export const getters = {
  getTest: ({test}) => test
};

export const mutations = {
  [GET_TEST]: (state, payload) => {
    state.test = [...state.test, payload]
  }
};

export const actions = {
  [GET_TEST]: ({commit}, payload) => {
    commit(GET_TEST, payload)
  }
};


