const { createHash } = require('node:crypto')

function hash(input) {
  return createHash('sha256').update(input).digest('hex')
}

let password = 'abacate'

const hash1 = hash(password)

password = 'abacate'

const hash2 = hash(password)

const passwordMatch = hash1 === hash2

console.log(passwordMatch ? '✅ good password' : '❌ password does not match')