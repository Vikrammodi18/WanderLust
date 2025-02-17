const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Review = require('./reviews.js')
const listSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        default: "https://images.unsplash.com/photo-1736435443725-6d726a127e0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set:(v)=> v===" "?"https://images.unsplash.com/photo-1736435443725-6d726a127e0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D":v,
    },
    price:{
        type:Number,
        required:true,
    },
    location:{
        type:String,
    },
    country:{
        type:String,
    },
    rating:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review"
        },
    ],
})

listSchema.post('findOneAndDelete', async (listing)=>{
    if(listing){
        await Review.deleteMany({_id:{$in:listing.rating}})
    }
})
const Listing = mongoose.model("listing",listSchema);
module.exports = Listing