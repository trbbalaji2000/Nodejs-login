var app=require('express').Router();

var Register_Model=require('../Models/Register')
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');

app.post('/registerdata',async(req,res)=>{
  

    const encrypt=cryptr.encrypt(req.body.password)
    const my_data= new Register_Model({
        name:req.body.name,
        email:req.body.email,
        password:encrypt
    })
    const check_data= await Register_Model.findOne({email:req.body.email})
    if(check_data)
    {
        res.send("Already Email Registered")
    }
    else
    {
 const status=await my_data.save();
 
    if(status)
    {
        res.send(status)
    }
    else
    {
        console.log("Err");
    }
    }
   
})


app.post('/login',async(req,res)=>{

    var password=req.body.password;
    var get_user=await Register_Model.findOne({email:req.body.email})
    const decrpt=cryptr.decrypt(get_user.password)
    if(get_user)
    {
        if(decrpt==password)
        {
            res.send("Welcome")
        }
        else
        {
            res.send("Invalid Password")
        }
    }
    else
    {
        res.send("Account Is Not Available")
    }
   

})

module.exports=app;