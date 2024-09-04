var express = require("express")
var app = express();
app.get("/myname",(req,res)=>{
    res.json({"msg":"Dwara"})
})


app.post("/myname",(req,res)=>{
    res.json({"name":"your post name"})
})

app.post("/login",(req,res)=>{
    user = {
        email:"admin@gmail.com"
    }
    let email = req["query"]["email"];
    let pwd = req["query"]["password"]
    console.log(email,pwd)
    if(email == "admin@gmail.com"&& pwd == "admin"){
        res.json({"msg":"you are crct"})
    }else{
        res.json({"msg":"you are wrong"})
    }
    
})

let 

app.listen(8080,()=>{
    console.log("server strated")
})