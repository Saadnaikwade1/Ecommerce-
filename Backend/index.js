const express = require("express");
const connectDB = require("./config/db.js");
const cors = require("cors");
const rt = require("./Routes/UserRoute.js");
// const { default: mongoose } = require("mongoose");
require("dotenv").config()

const PORT = process.env.PORT || 3000;
let app = express();

connectDB();
// mongoose.connect("mongodb://localhost:27017/v24hfs7ecomdb").then(()=>{
//     console.log("ok")
//     app.listen(5000)
// })

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/images", express.static("images"));
app.use("/", rt);

app.listen(PORT, () => {
  console.log(`application running on ${PORT}`);
});
