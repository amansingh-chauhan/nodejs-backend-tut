import mongoose from "mongoose";




//defining database schema 
const schema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
});
//defining database model
export const User=mongoose.model("user",schema);