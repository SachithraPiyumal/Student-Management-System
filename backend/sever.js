const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const cors = require("cors");

const app=express();
const PORT=8000;

app.use(bodyParser.json());
app.use(cors());



const mongoDb_URL="mongodb+srv://sachithra:sachithra@cluster0.ywiadsd.mongodb.net/studentManagement?retryWrites=true&w=majority";

//Connect to mongoDB database
mongoose.connect(mongoDb_URL)
.then(()=>console.log("DB Connected..."))
.catch((err)=>console.log("DB not connected...",err));



app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));