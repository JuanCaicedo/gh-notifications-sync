const axios = require('axios')
const config = require('config')
const userId = process.argv[2] || 'github|4341496'
const url = config.get('api.url')
;(async () => {
  try {
    await axios.post(`${url}/sync`, { userId })
    console.log('Synced successfully')
  } catch (e) {
    console.error('Sync failed with:', e)
  }
})()
