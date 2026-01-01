const mongoose=require('mongoose');

let UserScheema=new mongoose.Schema({
    "_id":String,
    "name":String,
    "email":String,
    "pwd":String,
    "phno":String,
    role:{
        type:String,
        default:"user"
    }
})

let User=mongoose.model("UserEcom",UserScheema)
module.exports=User