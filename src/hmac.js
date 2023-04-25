const { createHmac } = require('node:crypto')

const key = 'abacate'
const message = 'boo 👻'

const hmac = createHmac('sha256', key).update(message).digest('hex')

console.log(hmac)

const key2 = 'acelora'

const hmac2 = createHmac('sha256', key2).update(message).digest('hex')

console.log(hmac2)