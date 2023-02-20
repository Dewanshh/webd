const express=require('express');
const app=express();

app.get("/", function(request,response){
    response.send("<h1>Hello World</h1>")
})
app.get("/contact",function(req,res){
    res.send("<h1>Hello World Dewansh Here!</h1>");
})
app.get("/about",function(req,res){
    res.send("<h1>Dewansh Jangir, Sup?</h1>");
})
app.get("/hobbies",function(req,res){
    res.send("<h1>Love Motorsports!!</h1>");
})

app.listen(3000,function(){
    console.log("Server Started 3000");
});