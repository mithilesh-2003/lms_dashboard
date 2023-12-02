const express =require('express')
const mongoose =require('mongoose')
const cors =require('cors')
const bodyParser =require('body-parser')

const app =express();
const port= 3001;
app.use(cors())
app.use (bodyParser.json());

// database connection

mongoose.connect('mongodb://127.0.0.1:27017/Newlms')
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

const User=mongoose.model('User',{
    username:String,
    email:String,
    address:String,
    date:String,
    password:String
})

// employee modal
const employee =mongoose.model('Employee',{
    FirstName:String,
    LastName:String,
    email:String,
    pssword:String,
    User:String,
    Role:String,
    Code:String,
    Mobile:String,
    Gender:String,
    
})

// signup api

app.post('/Signup',async(req,res)=>{
    const{username,email,address,date,password}=req.body;
    try{
        const newUser =User({username,email,address,date,password})
        await newUser.save();
        res.json({message:' signup Successfull'});
    }
        catch(error){
            console.error('error during signup',error);
            res.status(500).json({message:'internal server error'})
        }

})

// employee signup
app.post('/employeeSignup',async(req,res)=>{
    const{FirstName,LastName,email,User,date,password,Role,Code,Mobile,Gender}=req.body;
    try{
        const newUser=employee({FirstName,LastName,email,User,date,password,Role,Code,Mobile,Gender})
        await newUser.save();
        res.json({message:' Employee signup Successfull'});
    }
        catch(error){
            console.error('error during signup',error);
            res.status(500).json({message:'internal server error'})
        }

})

// login api

app.post('/login',async(req,res)=>{
    const{email,password}=req.body;
    try{
        const user =await User.findOne({email});
        if(!User || user.password!== password){
            return res.status(401).json({message:'invalid email or password'})
        }
        res.json({message:'login success full'})
    }
    catch(error){
        console.error('Error during login',error);
    }
});