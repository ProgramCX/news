const { defineConfig } = require('@vue/cli-service');  
const webpack = require('webpack');  
  
module.exports = defineConfig({  
  publicPath: './',
  transpileDependencies: true,  
  devServer: {  
    proxy: {  
      '/myApi': {  
        target: 'http://apis.juhe.cn/',  
        changeOrigin: true,  
        secure: false,  
        pathRewrite: {  
          '^/myApi': ''  
        }  
      }  
    }  
  },  
  chainWebpack: config => {  
    config.plugin('provide').use(webpack.ProvidePlugin, [  
      {  
        $: 'jquery',  
        jquery: 'jquery',  
        jQuery: 'jquery',  
        'window.jQuery': 'jquery'  
      }  
    ]);  
  }  
});