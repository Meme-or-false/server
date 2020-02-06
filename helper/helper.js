const bcrypt = require('bcrypt')

const createError = (err) => {
    const temp = []
    err.errors.forEach(error => {
        temp.push(error.message)
    })

    return { message: temp }
}

const encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

const comparePassword = (plain, encrypted) => {
    return bcrypt.compareSync(plain, encrypted)
}

module.exports = { createError, encryptPassword, comparePassword }