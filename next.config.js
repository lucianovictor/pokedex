const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withReactSvg({
  webpack5: true,
  include: path.resolve(__dirname, 'src/assets/'),
  webpack(config, options) {
    return config
  }
})
