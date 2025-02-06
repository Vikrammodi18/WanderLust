const express = require('express')
const router = express.Router()
const User = require('../models/user')
const wrapAsync = require('../utils/wrapAsync')
router.get('/signup',(req,res)=>{
    res.render('user/signup.ejs')
})
router.post('/signup',wrapAsync(async (req,res)=>{
    try{

        const {email,username,password} = req.body
       const newUser = new User({email,username})
       const registeredUser = await User.register(newUser,password)
       req.flash("success","welcome to wonderlust")
       res.redirect('/listing')
    }catch(err){
        req.flash("error",err.message)
        res.redirect('/signup')
    }
}))
module.exports=router