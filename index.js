const express = require('express')
const mongoose = require('mongoose')
const Listing = require('./models/listing')
const path = require('path')
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate')
const wrapAsync = require("./utils/wrapAsync")
const ExpressError = require('./utils/ExpressError')
const {listingSchema,reviewSchema } = require('./schema.js')
const Review = require('./models/reviews.js')
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

const listingValidate = (req,res,next)=>{
    const {error} = listingSchema.validate(req.body)
    if(error){
        throw new ExpressError(400,error)
    }
    next()
}

const reviewValidate = (req,res,next)=>{
    const{error} = reviewSchema.validate(req.body)
    if(error){
        throw new ExpressError(400,error)
    }
    next()
}

//listing
app.get('/listing',wrapAsync(async (req,res)=>{
   const listData = await Listing.find({})
   res.render('listings/index',{listData}) 
})) 
//create new
app.get('/listing/create', (req,res)=>{
    res.render('listings/create')
})
//post new listing
app.post('/listing',listingValidate,wrapAsync( async (req,res,next)=>{
     
        let listing = req.body.listing;
        const list = new Listing(listing)
        await list.save()
       res.redirect('/listing')
}))
// //edit
app.get('/listing/:id/edit',wrapAsync( async (req,res)=>{
    const {id} = req.params;
   const list = await Listing.findById(id)
   res.render('listings/edit',{list})
}))
//delete
app.delete('/listing/:id',wrapAsync( async (req,res)=>{
    const {id} = req.params
    await Listing.findByIdAndDelete(id)
    res.redirect('/listing')
}))
//update
app.put('/listing/:id',listingValidate,wrapAsync( async (req,res)=>{
    const {id} = req.params
    const updatedList = req.body;
   await Listing.updateOne({_id:id},updatedList.listing)
    res.redirect('/listing')
}))
//details
app.get('/listing/:id',wrapAsync( async (req,res)=>{
    const {id}= req.params;
    const listingDetails = await Listing.findById(id).populate("rating")
    res.render('listings/details',{data:listingDetails})
}))
//review
app.post('/listing/:id/review',reviewValidate,wrapAsync(async (req,res)=>{

    const{id} = req.params
    const list = await Listing.findById(id)
    const review1 = new Review(req.body.review)
    list.rating.push(review1)
    await review1.save()
    await list.save()
    res.redirect(`/listing/${list._id}`)
   
}))
//delete review
app.delete('/listing/:id/review/:reviewId',wrapAsync(async (req,res)=>{
    const {id,reviewId} = req.params;
    await Listing.findByIdAndUpdate(id,{$pull:{rating:reviewId}})
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listing/${id}`)
}))
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