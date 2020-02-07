const jwt = require('jsonwebtoken')

function generateToken(payload) {
  console.log(payload)
  return jwt.sign(payload, process.env.JWT_SECRET_KEY)
}

function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET_KEY)
}

module.exports = { generateToken, verifyToken }
