const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));
const datee=require(__dirname+"/date.js")
var items=[];
var workitem=[];
console.log(datee());

app.get('/', function (req, res) {

    var today = datee();
    
    
    res.render('x', {
        ListTitle: today,
        item: items.length!=0?items:0
    });
    

});
app.post("/",function(req,res){
    var item=req.body.add;
    if(req.body.list==="Work")
    {
        workitem.push(item);
        res.redirect("/work")
    }
    else{
        items.push(item);
        res.redirect('/');
    }

    
})

app.get("/work",function(req,res){
    res.render('x',{
        ListTitle:"Work",
        item:workitem.length!=0?workitem:0,
    });
});





app.listen(3000, (req, res) => {
    console.log("Server is running");
})