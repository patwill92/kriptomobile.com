import {GET_TWEETS, HYDRATE_TWEETS} from "@/types";

export const state = () => ({
  tweets: []
});

export const getters = {
  getTweets: ({tweets}) => tweets
};

export const mutations = {
  [GET_TWEETS]: (state, tweets) => {
    state.tweets = tweets
  },
  [HYDRATE_TWEETS]: (state, tweets) => {
    state.tweets = [...state.tweets, ...tweets]
  }
};

export const actions = {
  [GET_TWEETS]: async ({commit}, payload) => {
    commit(GET_TWEETS, payload)
  },
  [HYDRATE_TWEETS]: async ({commit}, payload) => {
    commit(HYDRATE_TWEETS, payload)
  }
};


