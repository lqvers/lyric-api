# Lyric API
Effortlessly access lyrics through a lightweight API package, complete with type definitions for seamless integration.
## Example
```js
const lyrics = require('lyric-api');
(async() => {
    try {
        console.log(await lyrics.fetch('Toosie Slide', 1))
    } catch (error) {
        console.log('[lyric-api]:', error.message, error.stack)
    }
})()
```