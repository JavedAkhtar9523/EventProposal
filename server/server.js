const express =require('express')
const cors= require('cors')
const app=express()
const mongoose=require('mongoose')
require("dotenv").config()

app.use(express.json());
app.use(cors());

const port=process.env.PORT || 5000
const uri=process.env.DB_URI
app.listen(port,console.log(`Server running on ${port}...`))


mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=> console.log("Mongodb Connected sucessfully....")).catch((err)=> console.log("Mongodb connection failed",err.message))