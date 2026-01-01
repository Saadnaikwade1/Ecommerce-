const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

let ProductScheema=new mongoose.Schema({
    "_id":Number,
    "title":String,
    "price":String,
    "desc":String,
    "comm":[],
    "img":String,
    "cat":String,
})

ProductScheema.plugin(AutoIncrement, { inc_field: '_id',startAt:500000 });
let product=mongoose.model("ProductEcom",ProductScheema)
module.exports=product