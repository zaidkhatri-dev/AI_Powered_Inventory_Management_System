const jwt = require('jsonwebtoken')
const secretKey = 'zaid'

async function authUserusingCookie(req,res,next) {
    const token = req.cookies.token

    const user = jwt.verify(token,secretKey)

    req.user = user
    next()
}

module.exports = authUserusingCookie