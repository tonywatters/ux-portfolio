const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
 entry: './src/index.tsx',
 output: {
   path: path.resolve(__dirname, 'dist'),
   filename: 'bundle.js',
   publicPath: isProduction ? '/ux-portfolio/' : '/',
   clean: true
 },
 mode: isProduction ? 'production' : 'development',
 module: {
   rules: [
     {
       test: /\.(ts|tsx)$/,
       use: {
         loader: 'babel-loader',
         options: {
           presets: [
             '@babel/preset-env',
             '@babel/preset-react',
             '@babel/preset-typescript'
           ]
         }
       },
       exclude: /node_modules/,
     },
     {
       test: /\.css$/,
       use: ['style-loader', 'css-loader', 'postcss-loader'],
     },
     {
       test: /\.(png|jpg|jpeg|gif|mp4|avif)$/i,
       type: 'asset/resource'
     }
   ],
 },
 resolve: {
   extensions: ['.tsx', '.ts', '.js'],
 },
 plugins: [
   new HtmlWebpackPlugin({
     template: './public/index.html',
   }),
   new CopyWebpackPlugin({
     patterns: [
       { from: 'public/images', to: 'images' },
       { from: 'public/404.html', to: '404.html' }
     ]
   })
 ],
 devServer: {
   static: {
     directory: path.join(__dirname, 'public'),
   },
   port: 3000,
   hot: true,
   historyApiFallback: {
     rewrites: [
       { from: /^\/ux-portfolio\/.*/, to: '/ux-portfolio/index.html' }
     ],
     index: '/index.html'
   }
 },
};