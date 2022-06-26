const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const todoSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    catagory:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    complete:{
        type:Boolean,
        default:false,
    }
});

module.exports=mongoose.model('Todo',todoSchema);