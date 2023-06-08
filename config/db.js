
import mongoose from "mongoose";
import  Mongoose  from "mongoose";



const connecting=()=>{

const mongoose_URL='mongodb+srv://aryan:aryan@cluster1.alqtnoa.mongodb.net/GATE_LandingPage?retryWrites=true&w=majority'

mongoose.connect(mongoose_URL,{});
mongoose.connection.on('connected',()=>{console.log("db is connected");})
mongoose.connection.on('disconnected',()=>{console.log("XXX db is disconnected XXX");})
mongoose.connection.on('error',()=>{console.log("db is connected ----- error");})

}



export default connecting;










