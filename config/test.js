const R = require('ramda')
const local = require('./local-development')

const config = {
  github: {
    token: 'TEST_TOKEN',
  },
}

if (process.env.REPLAY === 'record') {
  module.exports = R.merge(config, local)
} else {
  module.exports = config
}
