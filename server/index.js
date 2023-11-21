const express=require('express')
const mongoose=require("mongoose")
const path=require('path')
require('dotenv').config()
const cors=require('cors');
const { json } = require('body-parser');
const app=express();
const PORT=process.env.PORT||3000;
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

 app.delete('/delete/:id',(req,res)=>{
    const id=req.params.id;
    console.log('Deleting customer with ID:', id);
    customer.findByIdAndDelete(id)
    .then(deletedcustomer=>{res.json(deletedcustomer), console.log("deleted")})
    .catch(err=>{res.json(err)})
     })



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

const memberSchema=new mongoose.Schema({
    email:{type:String}, phone:{type:Number}
})
const member=mongoose.model('member',memberSchema)
 module.exports=member;
 app.post('/signin',async (req,res)=>{
const {email, phone}=req.body;

try{
    const check= await member.findOne({email:email})
if(check){
    res.json('exist')
    console.log("An existing customer")
}
else {
    const newmember=new member({email,phone})
    await newmember.save();
    res.json('notexist');
    console.log("You have new member");
}
}
catch(e){
    console.log(e)
}
 })
 app.get('/getcustomers',(req,res)=>{
    customer.find()
    .then((user)=>{res.json(user)})
    .catch((e)=>{console.error(e)})
 })
 




app.get("/",(req,res)=>{
    res.send({ message: "hello johana" });
   
})
app.listen(PORT,()=>{
    console.log(`App running on port ${PORT}`)
})
