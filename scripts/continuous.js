const axios = require('axios')
const config = require('config')
const Bluebird = require('bluebird')
const userId = process.argv[2] || 'github|4341496'
const url = config.get('api.url')

const ONE_MINUTE = 1000 * 60

const logErr = err => {
  if (err.response) {
    console.error('err.response.data', err.response.data)
  } else if (err.message) {
    console.error('err.message', err.message)
    console.error('err.stack', err.stack)
  } else if (err.request) {
    console.error('err.request', err.request)
  } else {
    console.error('err', err)
  }
}

const sync = () => axios.post(`${url}/sync`, { userId })
const syncRecursive = () => {
  return sync()
    .then(() => {
      console.log('Synced successfully')
      return Bluebird.delay(ONE_MINUTE).then(() => syncRecursive())
    })
    .catch(() => {
      logErr(e)
      return syncRecursive()
    })
}

syncRecursive()
