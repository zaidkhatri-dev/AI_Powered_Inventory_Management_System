const express = require('express')
const {displayAllItems,formInput,formItemDel} = require('../controllers/product')
const showAnalysis = require('../controllers/analysis')
const handleGemini = require('../controllers/alerts')
const generateInvoice = require('../controllers/invoice')
const handleAccounts = require('../controllers/accounts')
const detectItems = require('../controllers/yolo')

const dashboardRouter = express.Router()

// Product List
dashboardRouter.get('/productlist',displayAllItems)

// Form Render
dashboardRouter.get('/productlist/detect',detectItems)
dashboardRouter.get('/productlist/form',(req,res)=>{
    res.render('form')
})
dashboardRouter.get('/productlist/form/delete',(req,res)=>{
    res.render('delete')
})

// Form Post
dashboardRouter.post('/productlist/form',formInput)
dashboardRouter.post('/productlist/form/delete',formItemDel)

// Analysis
dashboardRouter.get('/analysis',showAnalysis)

// Notifications
dashboardRouter.get('/alerts',handleGemini)

// Invoice
dashboardRouter.get('/invoice',(req,res)=>{
    res.render('invoice.ejs')
})
dashboardRouter.post('/invoice',generateInvoice)


// Account
dashboardRouter.get('/accounts',handleAccounts)
dashboardRouter.post('/accounts',(req,res)=>{
    res.redirect('/')
})

module.exports = dashboardRouter