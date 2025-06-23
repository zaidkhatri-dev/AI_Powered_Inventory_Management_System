const User = require('../models/user')

async function handleAccounts(req,res) {
    const allUser = await User.find()
    
    const user = allUser[allUser.length-1]

    res.render('accounts.ejs',{
        firstname: user.firstName,
        lastname: user.lastName,
        email: user.email
    })
}

module.exports = handleAccounts