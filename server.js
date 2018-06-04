const express = require('express');
const compression = require('compression');

// const twitterApi = require('./api/twitter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(express.static('dist'));

// app.use('/api', twitterApi);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
