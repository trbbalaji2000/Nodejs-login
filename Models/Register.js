
var mongo=require('mongoose');
var schemaData=mongo.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports=mongo.model("Register",schemaData);
