import axios from 'axios';

import {GET_TWEETS} from "@/types";

export default async ({store, isStatic, isDev}, inject) => {
  const endPoint = isDev ? 'http://localhost:4000/api/twitter' : 'https://twitterkripto.herokuapp.com/api/twitter';
  // const endPoint = 'https://twitterkripto.herokuapp.com/api/twitter';
  const res = await axios.get(endPoint);
  inject('axios', axios);
  store.commit(`twitter/${GET_TWEETS}`, res.data);
}
