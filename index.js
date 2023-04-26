/**==============================================
 * *                   INFO
 *   PROJECT: lyric-api
 *   AUTHOR: lttrvqs
 *=============================================**/

const p = require('phin')

/**
 * Create a point.
 * @param {string} song - The song you wish to fetch lyrics from.
 * @return {string} Lyrics
 */
module.exports.fetch = async function (song) {
    try {
    const res = await p(`https://api.popcat.xyz/lyrics?song=${song}`) // Uses Popcat API (popcat.xyz) to fetch lyrics from requested song
    
    return JSON.parse(res.body).lyrics
    } catch (error) {
        console.log('[lyric-api]:', error.message, error.stack)
    }
}