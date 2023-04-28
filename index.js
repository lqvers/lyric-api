/**==============================================
 * *                   INFO
 *   PROJECT: lyric-api
 *   AUTHOR: lttrvqs
 *=============================================**/

const p = require('phin')

/**
 * Create a point.
 * @param {String} song - The song you wish to fetch lyrics from.
 * @param {Number} source - The source you wish to fetch lyrics from.
 * @return {String} Lyrics
 * @example const lyrics = require('lyric-api)
 * print(lyrics.fetch('Song', 1)) // Sources: 1, 2
 */
module.exports.fetch = async function (song, source) {
    try {
        if (source === 2) {
            const res = await p(`https://api.popcat.xyz/lyrics?song=${song}`)
            return JSON.parse(res.body).lyrics
        } else if (source === 1) {
            const res = await p(`https://some-random-api.ml/others/lyrics?title=${song}`)
            return JSON.parse(res.body).lyrics
        } else {
            console.log('[lyric-api]:', error.message, error.stack)
        }
    } catch (error) {
        console.log('[lyric-api]:', error.message, error.stack)
    }
}
