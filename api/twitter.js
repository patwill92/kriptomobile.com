const express = require('express');

const Twitter = require('twitter');
const {config} = require('../keys');

const client = new Twitter(config);

const app = express();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

app.route('/twitter')
  .get((req, res) => {
    client.get('statuses/user_timeline', {screen_name: 'andrewjamesaw'}, function (error, tweets, response) {
      if (error) {
        return res.status(400).end({error: 'SORRY NO TWEETS'})
      }
      const resTweets = tweets
        .map(tweet => {
          const date = new Date(tweet.created_at);
          const dateString = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
          return {
            reTweeted: tweet.retweeted_status,
            username: tweet.user.screen_name,
            name: tweet.user.name,
            date: dateString,
            text: tweet.text,
            image: tweet.entities.media && tweet.entities.media[0].media_url_https,
            avatar: tweet.user.profile_image_url_https
          }
        })
        .filter(tweet => {
          return !tweet.reTweeted
        });
      return res.send(resTweets);
    });
  });

module.exports = app;


