const mongoose=require("mongoose");

const TeacherSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    subject:{
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

module.exports = mongoose.model("Teacher",TeacherSchema);