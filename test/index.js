const lyrics = require('../index.js');

lyrics.fetch('S', e)
(async() => {
    try {
        console.log(await lyrics.fetch('Old Town Road'))
    } catch (error) {
        console.log('[lyric-api]:', error.message, error.stack)
    }
})()