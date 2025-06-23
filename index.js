require('dotenv').config();
const express = require('express')
const cookieParser = require('cookie-parser')

const connectToDb = require('./connections')
const staticRouter = require('./routes/staticRoutes')
const userRouter = require('./routes/userRoutes')
const dashboardRouter = require('./routes/dashboardRoutes')
const authUserusingCookie = require('./middlewares/auth')

const PORT = 8000;
connectToDb('mongodb://127.0.0.1:27017/inventory-management')
.then(()=>{
    console.log("Success: MongoDB connected")
})

const app = express()

// EJS setup
app.set('view engine','ejs')
app.set('views','./views')

//Middlewares
app.use(express.static('static'))
app.use(express.urlencoded({extended: false}))
app.use(cookieParser());

// Routes

//Static routes
app.use('/',staticRouter);
//User routes
app.use('/',userRouter)
//Dashboard routes
app.use('/dashboard',authUserusingCookie,dashboardRouter)

app.listen(PORT,()=>{console.log('Server started at port:',PORT)})