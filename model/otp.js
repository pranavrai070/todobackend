import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
    email:String,
    code:String,
    expireIn:Number    
},{
    timestamps:true
});

const otp=mongoose.model("Otp", otpSchema);
export default otp;