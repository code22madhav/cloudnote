const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://madhav:password99@cloudnote.nkxvhps.mongodb.net/test")   
.then(()=>console.log("connection successful....."))
.catch((err)=>console.log(err));

module.exports= mongoose.connect;

//cluster password : password99
//user name: madhav