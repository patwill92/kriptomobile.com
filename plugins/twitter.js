import axios from 'axios';

import {GET_TWEETS} from "@/types";

export default async ({store, isStatic, isDev}, inject) => {
  const endPoint = isDev ? 'http://localhost:5000/api/twitter' : 'https://twitterkripto.herokuapp.com/api/twitter';
  const res = await axios.get(endPoint);
  inject('axios', axios);
  process.client ?
    store.commit(`twitter/${GET_TWEETS}`, {tweets: res.data, client: true}) :
    store.commit(`twitter/${GET_TWEETS}`, {tweets: res.data, client: false});
}
