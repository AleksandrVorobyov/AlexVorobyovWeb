const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    configureWebpack: {
      module: {
        rules: [
          {
            test: /\.pug$/,
            oneOf: [
              {
                resourceQuery: /^\?vue/,
                use: ['pug-plain-loader']
              },
              {
                use: ['raw-loader', 'pug-plain-loader']
              }
            ]
          }
        ]
      }
    },
    publicPath: '/AlexVorobyovWeb/'
});