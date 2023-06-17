const https=require('https');
const request=require('request');
const nodemailer=require('nodemailer');
const express=require('express');
const path=require('path');     
const app=express();
app.set('views',path.join(__dirname,"views"));
app.set('view engine','ejs');
app.use(express.static("public"));

app.get('/',async function(req,res){
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'angel30@ethereal.email',
            pass: 'DBpAV5FPUD6BPbtNzr'
        }
    });
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "devanshjangid876@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world Whats up and where where you these dayS?", // plain text body
        html: "<h3>Hello Dewansh Here, Welocome to my Univerese and here we go to explore many new technologies in short time</h3>", // html body
      });
      console.log("Message sent: %s", info.messageId);

    res.render("x");
})

app.listen(3000,function(req,res){
    console.log("Hello World");

})