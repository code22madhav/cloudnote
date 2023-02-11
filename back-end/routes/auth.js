const express=require("express");
const router=express.Router();
const User=require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt=require('bcrypt');
var jwt = require('jsonwebtoken');

JWT_Secret='Thisisthethirdpartofjwtithelpstodetectwheatherdataismanupluatedornot'

//creating a user using post req "/api/auth/createuser"
router.post("/createuser",[
    body('email','Invalid email').isEmail(),
    body('password','Password must be 5 chars long').isLength({ min: 5 }),
    body('name','Name should be minimum 3').isLength({ min: 3 }),
],async(req,res)=>{
    //Throw error if there is problem in validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

   
    //checking weather a user exist or not by using findOne
    try{
        let user=await User.findOne({email: req.body.email});
        if(user){
            return res.status(400).json({error:"Email allready existed"});
        }
        
        const salt=await bcrypt.genSalt(10);
        const secPass=await bcrypt.hash(req.body.password, salt);
    
        //creating user if email does'nt exist using .create method
        user=await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email
          })

          const data={
            user:{
                id: user.id
            }
          }
          const authtokenn=jwt.sign(data,JWT_Secret)
          res.json({authtokenn});

    }catch(err){
        console.error(err.message);
        res.status(500).send("Musibat ka jar yaha hai");
    }
})


//creating a login route using post req "/api/auth/login"

//added simple validation on the client side
router.post('/login',[
    body('email','Invalid email format').isEmail(),
    body('password','Password can not be empty').exists(),
],
async(req,res)=>{
    //Throw error if there is problem in validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email, password}=req.body;
    try{
        //checking whether  user exist or not 
        const user=await User.findOne({email:req.body.email});
        if(!user){
            return res.status(400).json({error:"Please enter correct credentials"});
        }
        //if user exist then compare password
        const passwordcompare=await bcrypt.compare(password,user.password);
        if(!passwordcompare){
            return res.status(400).json({error:"Please enter correct credentials"});
        }
        
        //if password is correct then send auth token
        const payload={
            user:{
                id:user.id,
            }
        }
        const authtokenn=jwt.sign(payload,JWT_Secret)
        res.json({authtokenn});


    }catch(err){
        console.error(err.message);
        res.status(500).send("This time Musibat ka jar yaha hai");
    }
})

module.exports=router;