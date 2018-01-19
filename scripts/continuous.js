const axios = require('axios')

const sync = async () => {
  try {
    await axios.post('http://localhost:3000/sync', { userId: 'github|4341496' })
    console.log('Synced successfully')
    console.log('Synced successfully')
  } catch (e) {
    console.error('Sync failed with:', e)
  }
}
;(async () => await sync())()

setInterval(sync, 1000 * 60)
