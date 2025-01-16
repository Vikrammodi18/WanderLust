const express = require('express')
const mongoose = require('mongoose')

const app = express()
Mongo_Url = "mongodb://127.0.0.1:27017/wonderlust"

main().then((res)=>{console.log("connected to db")})
.catch((err)=>console.log(err))

async function main(){
    await mongoose.connect(Mongo_Url)
}

app.get("/",(req,res)=>{
    res.send("i am home page:")
})

app.listen(3000,()=>{
    console.log("app runing at 3000 port:")
})