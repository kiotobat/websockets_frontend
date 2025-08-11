const { merge } = require('webpack-merge'); // извлекаем функцию merge()

const commonConfig = require('./webpack.common');
const productionConfig = require('./webpack.prod');
const developmentConfig = require('./webpack.dev');

module.exports = (env) => { // слияние 2-х конфигурационных файлов
  if (env.development) {
    return merge(commonConfig, developmentConfig);
  }
  return merge(commonConfig, productionConfig);
};
