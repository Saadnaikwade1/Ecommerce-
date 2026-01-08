let {v4:uuidv4}=require("uuid");
let Cart=require('../Models/CartModel');
// adding in cart
let addCart=async(req,res)=>{
    try {
        let arr=await Cart.find({"pid":req.body.pid,"uid":req.body.uid})
        if(arr.length==0){
            let data=new Cart({...req.body,"qty":1,"_id":uuidv4()})
            await data.save()
            res.json({"msg":"prod added to cart"})
        }else{
            await Cart.findByIdAndUpdate({"_id":arr[0]._id},{$inc:{"qty":1}})
            res.json({"msg":"prod added to cart"})
        }
    } catch {
        res.json({"msg":"Error in adding cart"})
    }
}

//deleting item from cart
let delCart=async(req,res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.cid)
        res.json({"msg":"product deleting from cart"})
    }catch{
        res.json({"msg":"Error in deleting product to cart"})
    }
}



// incrementing product in cart
let incCart=async(req,res)=>{
    try{
      await Cart.findByIdAndUpdate({"_id":req.params.cid},{$inc:{"qty":1}})
      res.json({"msg":"Cart increamented"})

    }catch{
        res.json({"msg":"Error in incrementing product to cart"})
    }
}


// decrementing product in cart
let decCart=async(req,res)=>{
    try{
      await Cart.findByIdAndUpdate({"_id":req.params.cid},{$inc:{"qty":-1}})
      res.json({"msg":"Cart decreamentd"})

    }catch{
        res.json({"msg":"Error in decreament product to cart"})
    }
}

// getting cart by userId 
let getCart=async(req,res)=>{
 
    try {
        let data=await Cart.find({"uid":req.params.uid})
        res.json(data)
    } catch{
        res.json({"msg":"Error in getting cart"})
    }
}
 
module.exports={addCart,delCart,incCart,decCart,getCart}