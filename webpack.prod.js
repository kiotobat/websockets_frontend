const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'production', // режим сборки
  optimization: {
    minimizer: [new CssMinimizerPlugin()], // минификация css
  },
};
