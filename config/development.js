const R = require('ramda')
const local = require('./local-development')
const config = {}

module.exports = R.merge(config, local)
