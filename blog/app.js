const express=require("express");
const https=require("https");
const path=require('path');
const jwt = require("jsonwebtoken");
const secretKey = "secretKey";
// 1XA2SyzuGk16RFjg


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://devanshjangid876:1XA2SyzuGk16RFjg@cluster0.ubgcihq.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

var bodyParser = require('body-parser')

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

var contentt=[];
var he=[];

app.set("view engine","ejs");
app.use(express.static("public"));

app.set('views',path.join(__dirname,("views")));

app.get("/",function(req,res){
    res.render('login',{
        content:contentt,
        heading:he
    });
});
app.get("/home",function(req,res){
   
    res.render("home");
});
app.post("/contact",function(req,res){
    res.render("contact")
});
app.get("/about",function(req,res){
    res.render("about")
});
app.get("/create",function(req,res){
    res.render("create")
});
app.get('/upload',function(req,res){
    
});

app.post("/jwt",function (req, res) {
    let x=req.query.email;
    let y=req.query.password;
    console.log(x+" "+y);
    const user={
        id:1,
        username:String(x),
        password:String(y)


    }
    const token = jwt.sign({user},secretKey);
    // t=res.json({ token });
    
    res.render('home',{
       tok:token,
        content:contentt,
        heading:he,
    });
    // res.render("contact");
   
});

app.post("/profile", verifyToken, (req, resp)=>{
    jwt.verify(req.token, secretKey,(err, authData)=>{
        if(err){
            resp.send({result:"Invalid Token"})
        }else{
            resp.json({
                message : "profile accessed",
                authData,
            })
        }
    })
    // res.render("contact")

})
function verifyToken(req, resp, next){
const bearerHeader = req.headers['authorization'];
if(typeof bearerHeader !== 'undefined'){
const bearer = bearerHeader.split(" ");
const token = bearer[0];
req.token = token;
next();
}else{
    resp.send({
        result:'Token is not valid'
    })
}
}


app.get("/res",function(req,res){
    let c=req.body.headi;
    let content=req.body.cco;
    console.log(c);
    he.push(c);
    contentt.push(content);
    console.log(contentt);
    res.redirect('/');
});
app.listen(3000,function(req,res){
    console.log("Hello World");
});