const express = require('express');

const Twitter = require('twitter');
const {config} = require('../keys');

const client = new Twitter(config);

const app = express();

app.route('/twitter')
  .get((req, res) => {
    client.get('statuses/user_timeline', {screen_name: 'andrewjamesaw'}, function (error, tweets, response) {
      if (error) {
        return res.status(400).end({error: 'SORRY NO TWEETS'})
      }
      return res.send(tweets);
    });
  });

module.exports = app;


