const express = require('express')
const router = express.Router({ mergeParams: true })
const app = express()
const wrapAsync = require("../utils/wrapAsync")
const ExpressError = require('../utils/ExpressError')
const {listingSchema,reviewSchema } = require('../schema.js')
const Listing = require('../models/listing')
const Review = require('../models/reviews')

const reviewValidate = (req,res,next)=>{
    const{error} = reviewSchema.validate(req.body)
    if(error){
        throw new ExpressError(400,error)
    }
    next()
}

//review
router.post('/',reviewValidate,wrapAsync(async (req,res)=>{
    
    const{id} = req.params
    
    const list = await Listing.findById(id)
    const review1 = new Review(req.body.review)
    list.rating.push(review1)
    await review1.save()
    await list.save()
    req.flash("success","Review successfully created")
    res.redirect(`/listing/${list._id}`)
   
}))
//delete review
router.delete('/:reviewId',wrapAsync(async (req,res)=>{
    const {id,reviewId} = req.params;
    await Listing.findByIdAndUpdate(id,{$pull:{rating:reviewId}})
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review successfully deleted")
    res.redirect(`/listing/${id}`)
}))
module.exports = router