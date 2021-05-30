const express=require("express");
const app=express();

const bodyParser=require("body-parser");

const path=require("path");

app.set("view engine","ejs");
app.set("views","views");


const userRouter = require("./routes/user");

app.use(express.static(path.join(__dirname,"public")));

app.use(bodyParser.urlencoded({extended:false}));

app.use("/",userRouter);

app.listen(3000);