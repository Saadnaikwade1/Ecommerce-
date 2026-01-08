const Product = require("../Models/ProductModel")
const multer  = require('multer')
const fs = require("fs");


//to add the img
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix +'.'+file.mimetype.split('/')[1])
  }
})

const upload = multer({ storage: storage })

let addprod=async(req,res)=>{
    console.log(req.body);
    try{
        let data=new Product({...req.body,"img":req.file.filename})
        await data.save()
        res.json({"msg":"Product added"})
    }catch(err){
        console.log(err.message);
        res.json({"msg":"Error in adding product"})
    }
}

//get all products
let getallprods=async(req,res)=>{
    try{
        let data= await Product.find()
        res.json(data)
    }catch{
        res.json({"msg":"Error in getting all products"})
    }
}

// get product by :id
let getprod=async(req,res)=>{
    try {
        let data= await Product.findById(req.params.pid)
        res.json(data)        
    } catch {
        res.json({"msg":"Error in getting product"})
    }
}

// update product
let updprod=async(req,res)=>{
    console.log(req.body);
    try{
    await Product.findByIdAndUpdate({"_id":req.body._id},req.body)
    res.json({"msg":"Products details updated"})

    }catch{
        res.json({"msg":"Error in updating product"})
    }
}

// delete product
let delprod=async(req,res)=>{
    try {
      let data= await Product.findByIdAndDelete(req.params.pid)
        fs.rm(`./images/${data.img}`,()=>{})
        res.json({"msg":"product deleted"})
    } catch {
        res.json({"msg":"Error in deleting the product"})
        
    }
}

// update image
let updimg=async(req,res)=>{
    try {
        let data= await Product.findByIdAndUpdate({"_id":req.body._id},{"img":req.file.filename})
        fs.rm(`./images/${data.img}`,()=>{})
    } catch{
        res.json({"msg":"Error in updating image"})
    }
}

// searchbar dynamically
let search=async(req,res)=>{
    try {
        let data= await Product.find({"title":new RegExp(req.params.word,'i')})
        res.json(data)
    } catch {
        res.json({"msg":"Error in searching the result"})
    }
}

module.exports={addprod,upload,getallprods,getprod,updimg,updprod,delprod,search}