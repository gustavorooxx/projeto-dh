const crypto = require('crypto')
console.log(crypto.createHash('md5').update('5638').digest('hex'));