const mongoose = require("mongoose");

const connectDB = async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/csm");
        console.log("Database Connected");
    }catch(error){
        console.log("Database Connection Failde Error");
    }
}

module.exports = connectDB;
