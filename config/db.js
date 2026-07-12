const mongoose = require("mongoose");
const dns = require("dns")
dns.setServers(["8.8.8.8","8.8.4.4"])

const connectDB = async()=>{
    try{
        await mongoose.connect("mongodb+srv://kolarajamanohar5_db_user:15SAY6MFtfvp3evU@cluster0.02nl3ic.mongodb.net/joshi?appName=Cluster0");
        console.log("Database Connected as db");
    }catch(error){
        console.log("Database Connection Failde Error");
    }
}

module.exports = connectDB;
