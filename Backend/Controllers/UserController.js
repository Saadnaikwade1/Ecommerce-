const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');
const User = require('../Models/UserModel');

let reg=async(req,res)=>{
    console.log(req.body);
    try{
        let obj= await User.findById(req.body._id)
        if (obj){
            res.json({"msg":"Account already exits"})
        }else{
            let hashcode=await bcrypt.hash(req.body.pwd,10)
            let data=new User({...req.body,"pwd":hashcode})
            await data.save()
            res.json({"msg":"Account created"})
        }
    }catch
    {
        res.json({"msg":"Error in register data"})
    }
}

let login=async(req,res)=>{
    try{
        let obj= await User.findById(req.body._id)
        if(obj){
            let f=await bcrypt.compare(req.body.pwd,obj.pwd)
            if(f){
                res.json({"token":jwt.sign({"_id":obj._id},process.env.JWT_SECRET),"name":obj.name,"role":obj.role,"uid":obj._id})
            }
            else{
                res.json({"msg":"Check Password"})
            }
        }else{
            res.json({"msg":"Check Email"})
        }
    }
    catch{
        res.json({"msg":"Error in login"})
    }
    
}

module.exports={login,reg}