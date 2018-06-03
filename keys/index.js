const config = process.env === 'production' ? require('./prod') : require('./dev');

module.exports = {
  config
};


