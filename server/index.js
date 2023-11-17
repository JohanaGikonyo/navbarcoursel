const express=require('express')
const mongoose=require("mongoose")
const path=require('path')
require('dotenv').config()
const cors=require('cors');
const { json } = require('body-parser');
const app=express();
const port=process.env.port||3000;
const MONGO_URI=process.env.MONGO_URI;
app.use(json())
app.use(cors());
mongoose.connect(MONGO_URI)
.then(()=>{
    console.log("Database Connected")
})
.catch(e=>{
    console.log(`There is some error ${e}`)
})
const dataSchema=new mongoose.Schema(
{
    email:{ type:String},
    phone:{ type:Number},
    message:{ type:String},
}
);
const customer=mongoose.model("customer",dataSchema)
 module.exports=customer;

app.post('/login',async(req,res)=>{
    const {email,phone,message}=req.body;
    const newcustomer=new customer({
        email,phone, message,
    })
try{
const check=await customer.findOne({email:email})
if(check){
await customer.findOneAndUpdate({email},{$set : {message}})
    res.json("exist")
    console.log("updated")
}
else{
  
   await newcustomer.save()
   res.json("notexist")
   console.log("new customer Saved")
}
}
catch(e){
    console.log(e)
}

  
})




app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/index.html"))
});
app.listen(port,()=>{
    console.log(`App running on port ${port}`)
})
