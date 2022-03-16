var express=require("express")
var app=express();
var port=4000;

app.get('/',(req,res)=>{
    res.send("Welcome Nodejs Login")
})

app.listen(port,()=>{
    console.log("Server Is Running ...."+port);
})

