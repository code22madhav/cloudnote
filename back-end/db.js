const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/cloudnote")
.then(()=>console.log("connection successful....."))
.catch((err)=>console.log(err));

module.exports= mongoose.connect;