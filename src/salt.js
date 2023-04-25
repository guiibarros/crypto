const { scryptSync, randomBytes, timingSafeEqual } = require('node:crypto')

const users = []

function signup(email, password) {
  const salt = randomBytes(16).toString('hex')
  const passwordHash = scryptSync(password, salt, 64).toString('hex')

  const user = {
    email,
    password: `${salt}:${passwordHash}`
  }

  users.push(user)

  return user
}

function login(email, password) {
  const user = users.find(user => user.email === email)

  const [salt, key] = user.password.split(':')
  const hashedBuffer = scryptSync(password, salt, 64)

  const keyBuffer = Buffer.from(key, 'hex')

  const match = timingSafeEqual(hashedBuffer, keyBuffer)

  if (match) {
    return 'login success!'
  }

  return 'login fail!'
}

signup('test@email.com', '123')

const loginMessage = login('test@email.com', '123')

console.log(loginMessage)