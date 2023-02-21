var express=require("express");
var app=express();
app.use(express.static('public'));


const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    res.send("Hey Your Addition of two number is: "+(parseInt(req.body.num1)+parseInt(req.body.num2)));
})

app.get("/contact",function(req,res){
    res.send("Hello World In Contacts");
});
app.listen(3000,function(){
    console.log("Server Started 3000");
});