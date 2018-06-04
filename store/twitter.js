import {GET_TWEETS} from "@/types";

export const state = () => ({
  tweets: [],
  client: false
});

export const getters = {
  getTweets: ({tweets}) => tweets,
  getClient: ({client}) => client
};

export const mutations = {
  [GET_TWEETS]: (state, tweets) => {
    if(tweets.client) {
      state.tweets = tweets.tweets;
      state.client = tweets.client;
    } else {
      state.tweets = tweets.tweets;
    }
  }
};

export const actions = {
  [GET_TWEETS]: async ({commit}, payload) => {
    commit(GET_TWEETS, payload)
  }
};


