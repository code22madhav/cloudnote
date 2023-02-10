const express=require("express");
const router=express.Router();
const User=require('../models/User');
const { body, validationResult } = require('express-validator');

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
    
        //creating user if email does'nt exist
        user=await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
          })
          res.send(user);
    }catch(err){
        console.error(err.message);
        res.status(500).send("Musibat ka jar yaha hai");
    }
})

module.exports=router;