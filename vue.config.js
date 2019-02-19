const path = require("path");

module.exports = {
    chainWebpack: config => config.plugins.delete('named-chunks'),
    runtimeCompiler: true,
    css: {
        modules: true,
        loaderOptions: {
            sass: {
                data: `
                    @import "@/styles/global.scss";
                `
            },
            postcss: {
                // options here will be passed to postcss-loader
            }
        }
    },
    pluginOptions: {
        "style-resources-loader": {
          preProcessor: "scss",
          patterns: [path.resolve(__dirname, "./src/styles/global.scss")]
        }
    }
}
