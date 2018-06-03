import {GET_TWEETS} from "@/types";

export const state = () => ({
  tweets: []
});

export const getters = {
  getTweets: ({tweets}) => tweets
};

export const mutations = {
  [GET_TWEETS]: (state, tweets) => {
    state.tweets = tweets;
  }
};

export const actions = {
  [GET_TWEETS]: ({commit}, payload) => {
    commit(GET_TWEETS, payload)
  }
};


