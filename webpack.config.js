require('dotenv').config();

const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/client/src/index.jsx'),
  output: {
    path: path.join(__dirname, '/client/dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: { loader: 'babel-loader' },
      },
    ],
    loaders: [
      { exclude: ['node_modules'], loader: 'babel', test: /\.jsx?$/ },
      { loader: 'style-loader!css-loader', test: /\.css$/ },
      { loader: 'url-loader', test: /\.gif$/ },
      { loader: 'file-loader', test: /\.(ttf|eot|svg)$/ },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@Components': path.resolve(__dirname, 'client/src/components/'),
      '@Contexts': path.resolve(__dirname, 'client/src/contexts/'),
      config$: './configs/app-config.js',
      react: './vendor/react-master',
    },
    modules: [
      'node_modules',
      'bower_components',
      'shared',
      '/shared/vendor/modules',
    ],
  },
};
