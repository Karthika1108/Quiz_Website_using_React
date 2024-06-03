const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/quiz')
.then(()=>{
    console.log("Connected to Mongodb")
})
.catch(()=>{
    console.log("Failed to connect")
})
const scheme=new mongoose.Schema({
    question:{
        type:String,
        require:true
    },
    opt1:{
        type:String,
        require:true
    },
    opt2:{
        type:String,
        require:true
    },
    opt3:{
        type:String,
        require:true
    },
    opt4:{
        type:String,
        require:true
    },
    ans:{
        type:String,
        require:true
    }
})
const collection=mongoose.model("Questions",scheme);
module.exports={collection}