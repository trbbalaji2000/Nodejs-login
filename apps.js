var express=require("express")
var mongo=require("mongoose")
var app=express();
var body=require('body-parser');
var cors=require('cors')
var reg=require('./Routers/Register.js')
var port=3000;
app.use(cors())
var connectionString="mongodb://localhost:27017/Web-Deploy"
mongo.connect(connectionString,(err)=>{
    if(err) throw err;
    console.log("DB is Connected...");
})
app.use(body.json())
app.use('/api',reg);

app.listen(port,()=>{
    console.log("Server Is Running ...."+port);
})

