const express = require('express')
const router = express.Router()
const wrapAsync = require("../utils/wrapAsync")
const ExpressError = require('../utils/ExpressError')

const {listingSchema,reviewSchema } = require('../schema.js')
const Listing = require('../models/listing')
const listingValidate = (req,res,next)=>{
    const {error} = listingSchema.validate(req.body)
    if(error){
        throw new ExpressError(400,error)
    }
    next()
}
//listing
router.get('/',wrapAsync(async (req,res)=>{
    const listData = await Listing.find({})
    res.render('listings/index',{listData}) 
 }))
 //create new
 router.get('/create', (req,res)=>{
     res.render('listings/create')
 })
 //post new listing
 router.post('/',listingValidate,wrapAsync( async (req,res,next)=>{
      
         let listing = req.body.listing;
         const list = new Listing(listing)
         await list.save()
        res.redirect('/listing')
 }))
 // //edit
 router.get('/:id/edit',wrapAsync( async (req,res)=>{
     const {id} = req.params;
    const list = await Listing.findById(id)
    res.render('listings/edit',{list})
 }))
 //delete
 router.delete('/:id',wrapAsync( async (req,res)=>{
     const {id} = req.params
     await Listing.findByIdAndDelete(id)
     res.redirect('/listing')
 }))
 //update
 router.put('/:id',listingValidate,wrapAsync( async (req,res)=>{
     const {id} = req.params
     const updatedList = req.body;
    await Listing.updateOne({_id:id},updatedList.listing)
     res.redirect('/listing')
 }))
 //details
 router.get('/:id',wrapAsync( async (req,res)=>{
     const {id}= req.params;
     const listingDetails = await Listing.findById(id).populate("rating")
     res.render('listings/details',{data:listingDetails})
 }))
 module.exports = router