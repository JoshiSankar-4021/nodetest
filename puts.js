const express = require("express")
const app = express();
app.use(express.json())

app.put("/put2/:id",(req,res)=>{
    const {name,age,email}=req.body;
    const id=req.params.id;

    res.json({
        message:req.body
    })
})

app.get("/alldata",(req,res)=>{
    //const vaialbe_name = query
    //res.json(variable_name)
})

app.get("/sdata/:id",(req,res)=>{
    //const vaialbe_name = query
    //res.json(variable_name)
})

app.delete("/delete/:id",(req,res)=>{
    //const vaialbe_name = query
    //res.json(variable_name)
})


app.listen(3002,()=>{
    console.log("Server is running at http://localhost:3002")
})
