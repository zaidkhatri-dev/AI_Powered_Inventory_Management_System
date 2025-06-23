const User = require('../models/user')
const secretKey = 'zaid'
const jwt = require('jsonwebtoken')

async function signupUser(req,res) {
    try{
        const user = req.body

        await User.create({
            firstName: user.firstname,
            lastName: user.lastname,
            email: user.email,
            password: user.password
        })

    }catch(err){
        return res.render('signup',{
            error: "Email already in use"
        })
    }

    return res.redirect('/dashboard/productlist')
}

async function loginUser(req,res) {
    try{
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password
        })
        
        if(!user){
            return res.render('login.ejs',{
                error: "Invalid login credentials"
            })
        }

        const token = jwt.sign({
            email: user.email,
            password: user.password
        },secretKey)

        res.cookie('token',token);

    }catch(err){
          res.send('Error loging in')
    }
    
    return res.redirect('/dashboard/productlist')
    
}

module.exports = {
    signupUser,
    loginUser
}