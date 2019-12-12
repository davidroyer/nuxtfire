export default function(moduleOptions) {
  this.extendBuild((config, { isClient, isServer }) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'js-yaml-loader'
    })
  })
}
