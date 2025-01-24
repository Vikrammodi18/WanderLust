const express = require('express')
const mongoose = require('mongoose')
const Listing = require('./models/listing')
const path = require('path')
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate')
const wrapAsync = require("./utils/wrapAsync")
const ExpressError = require('./utils/ExpressError')
const listingSchema = require('./schema.js')
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
   const {error} =  listingSchema.validate(req.body);
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
    //    console.log(req.body.listing);
       
        let listing = req.body.listing;
        // console.log("only req.body:-",listing)
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
   await Listing.updateOne({_id:id},updatedList)
    res.redirect('/listing')
}))


//details
app.get('/listing/:id',wrapAsync( async (req,res)=>{
    const {id}= req.params;
    const listingDetails = await Listing.findById(id)
    res.render('listings/details',{data:listingDetails})
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