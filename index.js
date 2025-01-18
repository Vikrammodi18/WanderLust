const express = require('express')
const mongoose = require('mongoose')
const Listing = require('./models/listing')
const path = require('path')
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate')


const app = express()

Mongo_Url = "mongodb://127.0.0.1:27017/wonderlust"

app.use(methodOverride('_method'))
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

app.get("/",(req,res)=>{
    res.send("i am home page:")
})
//listing
app.get('/listing',async (req,res)=>{
   const listData = await Listing.find({})
   res.render('listings/index',{listData})
})
//create new
app.get('/listing/create',(req,res)=>{
    res.render('listings/create')
})
//post new listing
app.post('/listing', async (req,res)=>{
    let listing = req.body;
    const list = new Listing(listing)
    await list.save()
   res.redirect('/listing')
})
// //edit
app.get('/listing/:id/edit',async (req,res)=>{
    const {id} = req.params;
   const list = await Listing.findById(id)
   res.render('listings/edit',{list})
})
//delete
app.delete('/listing/:id',async (req,res)=>{
    const {id} = req.params
    
    await Listing.findByIdAndDelete(id)
    res.redirect('/listing')
})
//update
app.put('/listing/:id',async (req,res)=>{
    const {id} = req.params
    const updatedList = req.body;
    Listing.updateOne({_id:id},updatedList).then((res)=>res.redirect('/listing'))
    .catch((err)=>console.log(err))
    
})


//details
app.get('/listing/:id',async (req,res)=>{
    const {id}= req.params;
    const listingDetails = await Listing.findById(id)
    res.render('listings/details',{data:listingDetails})
})


app.listen(3000,()=>{
    console.log("app runing at 3000 port:")
})