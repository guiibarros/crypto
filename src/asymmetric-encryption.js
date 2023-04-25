const { publicEncrypt, privateDecrypt } = require('node:crypto')
const { privateKey, publicKey } = require('./keypair')

const message = 'Seloko truta bão demaisu esse modulo crypto'

const encryptedData = publicEncrypt(publicKey, Buffer.from(message))
const decryptedData = privateDecrypt(privateKey, encryptedData)

console.log(encryptedData.toString('hex'))
console.log(decryptedData.toString('utf-8'))