const express = require("express");
const https = require("https");
const request = require("request");

const path = require("path")
const app = express();

app.set('views', path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render('search');
})
app.get("/result", function (req, resp) {
    let query=req.query.search;
    let url="https://api.themoviedb.org/3/search/movie?api_key=aab21e43e6b08171f5d488bcbae9de95&query="+query;
    request(url,(error,res,body)=>
    {
        if(error){
            console.log(error);
        }
        else{
            let data=JSON.parse(body);
            
            resp.render('result',{data:data,querySearch:query});
            console.log(data);
        }
    })
    
    // res.render('result');
})


app.listen(3000, function (req, res) {
    console.log("Running Server 3000");
})