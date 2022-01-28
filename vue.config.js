module.exports = {
    chainWebpack: config => {
      const svgRule = config.module.rule('svg');
      svgRule.uses.clear();
      svgRule
        .use('raw-loader')
          .loader('raw-loader');
    },
    'devServer': {
      'host': 'localhost',
      'port': 8085,
      'historyApiFallback': false,
      'proxy': {
        '/mock': {
          target: 'http://192.168.200.230:3000/',
          // target: 'http://61.159.236.213:10012',
         // target: 'http://192.168.200.230:3000/',
          changeOrigin: true
        },
        '/': {
          // target: 'http://localhost:3000/', // 用的网易的api文档 本地启的服务
          target: 'https://netease-cloud-music-api-pearl-iota.vercel.app/', // 线上文档代理地址
          changeOrigin: true
        }
  
      }
    },
    'publicPath': './',
    'pluginOptions': {
      'style-resources-loader': {
        'preProcessor': 'less',
        'patterns': [
          '/mnt/c/www/trs/next-communication-analysis/src/assets/styles/variable.less'
        ]
      }
    },
    'transpileDependencies': [
      'vuetify'
    ]
  };
  