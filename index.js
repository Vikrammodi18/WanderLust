const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate')
const ExpressError = require('./utils/ExpressError')
const listingRouter = require('./route/listing')
const reviewRouter = require('./route/review')

const app = express()

Mongo_Url = "mongodb://127.0.0.1:27017/wonderlust"

app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.set('views',path.join(__dirname,'views'))
app.engine('ejs',ejsMate)
app.use(express.static(path.join(__dirname,'/public')))


main().then((res)=>{console.log("connected to db")})
.catch((err)=>console.log(err))

async function main(){
    await mongoose.connect(Mongo_Url)
}
app.use('/listing',listingRouter)
app.use('/listing/:id/review',reviewRouter)


app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"page not found"))
})
app.use((err,req,res,next)=>{
    let{status=500,message ="something went wrong"} = err
    res.status(status).render('listings/error',{message})
})

app.listen(3000,()=>{
    console.log("app runing at 3000 port:")
})