var express=require("express")
var mongo=require("mongoose")
var app=express();
var bodyParser=require('body-parser');
var cors=require('cors')
var reg=require('./Routers/Register.js')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
var connectionString="mongodb://localhost:27017/Web-Deploy"
mongo.connect(connectionString,(err)=>{
    if(err) throw err;
    console.log("DB is Connected...");
})
app.use(bodyParser.json())
app.use('/api',reg);
app.get('/',(req,res)=>{
    res.send("Welcome To Login Apps")
})
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3000;
app.listen(port,()=>{
    console.log("Server Is Running ...."+port);
})

