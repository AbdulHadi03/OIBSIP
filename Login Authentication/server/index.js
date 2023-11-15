const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const CustomerModel=require('./models/Customer')
const express_app=express()
express_app.use(express.json())
express_app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/customers")
express_app.post('/login',(req,res)=>{
    const{email,password}=req.body;
    CustomerModel.findOne({email:email})
    .then(user=>{
        if(user){
        if(user.password==password){
            res.json("Success")
        }else{
            res.json("The password is incorrect!")
        }}else{
            res.json("No record existed")
        }
    })
})
express_app.post('/register',(req,res)=>{
CustomerModel.create(req.body).then(customers=>res.json(customers)).catch(err=>res.json(err))
})
express_app.listen(3001,()=>{
    console.log("server is running")
})