const { generateKeyPairSync } = require('node:crypto')

const { publicKey, privateKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem'
  }
})

module.exports = {
  publicKey,
  privateKey,
}