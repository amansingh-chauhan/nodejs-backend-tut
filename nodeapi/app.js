import express from "express";
import mongoose from "mongoose";


const app = express();

//using middleware
app.use(express.json());

//connecting database
mongoose.connect("mongodb://127.0.0.1:27017",{
    dbName: "nodeapi",

})
.then(()=>console.log("Database connected"))
.catch((e)=>console.log(e));

app.get("/",(req,res)=>{
    res.send("nice working");
})

//defining database schema 
const schema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
});
//defining database model
const User=mongoose.model("user",schema);

//defining api to get all users
app.get("/users/all",async(req,res)=>{

  const users = await  User.find({});
  console.log(req.query);

  const keyword=req.query.keyword;
  console.log(keyword);

    res.json({
        success:true,
        users:[users],
    })
})

//static api     ****note*** must be decalred before dynamic api
app.get("/userid/special",async (req,res)=>{
    res.json({
        success:true,
        message:"just checking",
    })
});

//dynamic id passing  ***note*** dynamic apis should be created at very last
app.get("/userid/:id",async (req,res)=>{
    //const {id}=req.query;
    const {id}=req.params;
    const user=await User.findById(id);
   // console.log(req.params);
    res.json({
        success:true,
        user,
    })
});

//creating or adding users to database
app.post("/users/new",async(req,res)=>{

    const{name,email,password}=req.body

    await  User.create({
        name,
        email,
        password,
    })
  
      res.status(201).cookie("tempi","lol").json({
          success:true,
          message:"Registeres Successfully",
      })
  })

app.listen(4000,()=>{
    console.log("server is working");
})