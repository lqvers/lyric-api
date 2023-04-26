const lyrics = require('../index.js');

(async() => {
    try {
        console.log(await lyrics.fetch('Old Town Road'))
    } catch (error) {
        console.log('[lyric-api]:', error.message, error.stack)
    }
})()