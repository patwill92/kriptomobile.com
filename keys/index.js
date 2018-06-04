const type = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';
const config = require(`./${type}`);

module.exports = {
  config
};


