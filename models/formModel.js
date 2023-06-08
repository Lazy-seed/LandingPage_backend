import mongoose from 'mongoose';

const formschema=new mongoose.Schema({
    first_name:{
        type:String,
    },
    last_name:{
        type:String,
    },
    email:{
        type:String,
    },
    contact:{
        type:Number,
    },
    branch:{
        type:String,
    },
    GateYear:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now()
    }
})


const formModel =mongoose.model("students",formschema);
export default formModel



























