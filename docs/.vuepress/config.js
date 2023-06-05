module.exports = {
    title: require("../../package.json").name,
    description: require("../../package.json").description,
    configureWebpack: {
        resolve: {
          alias: {
            '@alias': 'path/to/some/dir'
          }
        }
      }
}