export default function(moduleOptions) {
  // eslint-disable-next-line no-console
  console.log('HELLO')

  this.extendBuild((config, { isClient, isServer }) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'js-yaml-loader'
    })
  })
}
