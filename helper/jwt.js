const jwt = require("jsonwebtoken")

function generateToken(payload) {
  console.log(payload)
  return jwt.sign(payload, process.env.secret_key)
}

function verifyToken(token) {
  return jwt.verify(token, process.env.secret_key)
}

module.exports = {
  generateToken,
  verifyToken
}