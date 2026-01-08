const express = require('express');
const { login, reg } = require('../Controllers/UserController');
const { upload, addprod, getprod, getallprods, search, updprod, updimg, delprod } = require('../Controllers/ProductController');
const { addCart, incCart, decCart, delCart, getCart } = require('../Controllers/CartController');

let rt=new express.Router()

rt.post("/add",reg)
rt.post("/login",login)

rt.post("/addprod",upload.single("img"), addprod);

rt.get("/prods",getallprods)
rt.get('/prod/:pid',getprod)
rt.get("/search/:word",search)
rt.put("/upddet",updprod)
rt.put("/updimg",upload.single("img"),updimg)
rt.delete("/delprod/:pid",delprod)

rt.post("/addcart",addCart) 
rt.get("/inc/:cid",incCart)
rt.get("/dec/:cid",decCart)
rt.delete("/delcart/:cid",delCart)
rt.get("/getcart/:uid",getCart)



module.exports=rt