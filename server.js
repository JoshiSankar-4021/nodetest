const express = require("express")
const app = express()
app.use(express.json())

const cors = require("cors")

const postroutes = require("./routes/posts1")

const connectDB = require("./config/db");
 
app.use(cors({
    origin:["http://localhost:5173","https://myfirstapp-sasi.vercel.app"],
    methods:["GET","POST","DELETE","PUT"]
}))

app.use("/post1",postroutes)

connectDB();
1
app.listen(3003,()=>{
    console.log("server is running at http://localhost:3003")
})