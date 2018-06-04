import {GET_TWEETS} from "@/types";

export const state = () => ({
  tweets: [],
  client: false
});

export const getters = {
  getTweets: ({tweets}) => tweets
};

export const mutations = {
  [GET_TWEETS]: (state, tweets) => {
    state.tweets = tweets
  }
};

export const actions = {
  [GET_TWEETS]: async ({commit}, payload) => {
    commit(GET_TWEETS, payload)
  }
};


