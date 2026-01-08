const mongoose = require('mongoose');
const { stringify } = require('uuid');
let CartScheema=mongoose.Schema({
    "_id":String,
    "pid":Number,
    "uid":String,
    "title":String,
    "price":Number,
    "qty":Number,
    "img":String,

})

let Cart=mongoose.model("CartEcom",CartScheema);
module.exports=Cart