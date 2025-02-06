const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate')
const ExpressError = require('./utils/ExpressError')
const listingRouter = require('./route/listing')
const reviewRouter = require('./route/review')
const userRouter = require('./route/user')
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const flash = require('connect-flash')
const User = require('./models/user')
const app = express()

Mongo_Url = "mongodb://127.0.0.1:27017/wonderlust"

const sessionOptions = {
    secret:"mySecretCode",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires: Date.now() + 7 * 24 * 60 * 60*1000,
        maxAge :  7 * 24 * 60 * 60*1000,
        httpOnly: true,
    }
}

app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs") //set view engine ejs
app.set('views',path.join(__dirname,'views')) 
app.engine('ejs',ejsMate)
app.use(express.static(path.join(__dirname,'/public'))) //use public directory for static file

app.use(session(sessionOptions))//create session using middleware
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

main().then((res)=>{console.log("connected to db")})
.catch((err)=>console.log(err))

//establishing the connection with mongoDB
async function main(){
    await mongoose.connect(Mongo_Url)
}

app.use((req,res,next)=>{
    res.locals.success = req.flash("success")
    res.locals.error = req.flash("error")
    next()
})


// app.use('/demo', async (req,res)=>{
//     let fakeUser = new User({
//         email:"student@gmail.com",
//         username:"delta-student"
//     })
//     let registeredUser = await User.register(fakeUser,"student123@");
//     res.send(registeredUser)
// })

//create two router for separate request
app.use('/listing',listingRouter)
app.use('/listing/:id/review',reviewRouter)
app.use('/',userRouter)
//handling custom errors using Express-error
app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"page not found"))
})
app.use((err,req,res,next)=>{
    let{status=500,message ="something went wrong"} = err
    res.status(status).render('listings/error',{message})
})

//listing the request at port 3000
app.listen(3000,()=>{
    console.log("app runing at 3000 port:")
})