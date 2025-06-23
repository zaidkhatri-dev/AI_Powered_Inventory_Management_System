const express = require('express')

const staticRouter = express.Router();

staticRouter.get('/',(req,res)=>{
    res.render('home')
})

staticRouter.get('/login',(req,res)=>{
    res.render('login')
})

staticRouter.get('/signup',(req,res)=>{
    res.render('signup')
})

module.exports = staticRouter