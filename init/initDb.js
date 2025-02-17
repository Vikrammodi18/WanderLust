const mongoose = require('mongoose')
const Listing = require('../models/listing')
const initData = require('./data')

Mongo_Url = "mongodb://127.0.0.1:27017/wonderlust"

main().then((res)=>{console.log("connected to db")})
.catch((err)=>console.log(err))

async function main(){
    await mongoose.connect(Mongo_Url)
}

async function Store(){
   await Listing.deleteMany({})
   await Listing.insertMany(initData.data)
   console.log("data inserted successful")
}
Store()