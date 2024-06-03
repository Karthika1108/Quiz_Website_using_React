const express=require('express')
const {collection}=require('./Mongo')
const app=express();
const cors=require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.post('/form',async(req,res)=>{
    const{question,opt1,opt2,opt3,opt4,ans}=req.body
    const data={
        question:question,
        opt1:opt1,
        opt2:opt2,
        opt3:opt3,
        opt4:opt4,
        ans:ans
    }
    try{
       const status=collection.insertMany([data])
       if(status){
          res.json("inserted")
          console.log("Question inserted");
       }
    }catch(e){
        console.log(e)
    }
})
app.get('/form',async(req,res)=>{
    try{
         const data= await collection.find();
         res.json(data);
         
    }catch(e){
      console.log(e)
    }
})
app.listen(8000,()=>{
    console.log("Server connected to 8000");
})