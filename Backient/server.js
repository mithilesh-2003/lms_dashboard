const express =require('express')
const mongoose =require('mongoose')
const bodyParser =require('body-parser')

const app =express();
const port= 3001;
app.use(cors())
app.use (bodyParser.json());

// database connection

mongoose.connect('mongodb://1270.0.0.1:27017/Newlms')
.then(()=>{
    console.log('connection stablished')
    app.listen(port,()=>{
        console.log(`server is running on ports ${port}`)
    });
})
.catch((error)=>{
    console.error('data base is not connected',error)
})

// create modal

const User =mongoose.modal('User',{
    username:String,
    email:String,
    address:String,
    date:String,
    password:String
})

// signup api

app.post('/Signup',async(req,res)=>{
    const{username,email,address,date,password}=req.body;
    try{
        const newUser =User({username,email,address,date,password})
        await newUser.save();
        res.json({message:'signup Successfull'});
    }
        catch(error){
            console.error('error during signup',error);
            res.status(500).json({message:'internal server error'})
        }

})