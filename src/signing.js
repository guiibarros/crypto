const { createSign, createVerify } = require('node:crypto')
const { privateKey, publicKey } = require('./keypair')

const message = 'Acabou a criativadade 😢'

const signer = createSign('rsa-sha256')
signer.update(message)

const signature = signer.sign(privateKey, 'hex')

const verifier = createVerify('rsa-sha256')
verifier.update(message)

const isVerified = verifier.verify(publicKey, signature, 'hex')

console.log(`Is signing secure? ${isVerified}`)