const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const ProductSchema = new mongoose.Schema({
    _id:Number,
  title: String,
  price: String,
  desc: String,
  comm: [],
  img: String,
  cat: String,
});

// ✅ plugin will create _id automatically
ProductSchema.plugin(AutoIncrement, {
  inc_field: "_id",
  startAt: 500000,
});

Product = mongoose.model("ProductEcom", ProductSchema);
module.exports=Product
 