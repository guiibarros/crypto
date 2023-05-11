const { createHmac } = require('node:crypto')

const key = 'super secret key'
const message = 'simple message'

const hmac = createHmac('sha256', key).update(message).digest('hex')

console.log(hmac)

const key2 = 'cherry'

const hmac2 = createHmac('sha256', key2).update(message).digest('hex')

console.log(hmac2)
