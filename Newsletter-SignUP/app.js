const express = require('express');
const request = require('superagent');
const https = require('https');

const app = express();
const bodyParser = require('body-parser');
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));


app.get('/', function (req, res) {
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", function (req, res) {
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    console.log(fname, lname, email);

    var mailchimpInstance = 'us10',
        listUniqueId = 'efc9e2d70a',
        mailchimpApiKey = 'c3af69a28b3601338f594ebf06e70f0f-us10';

    request.post('https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/')
    .set('Content-Type', 'application/json;charset=utf-8')
    .set('Authorization', 'Basic ' + new Buffer('any:' + mailchimpApiKey).toString('base64'))
    .send({
            'email_address': email,
            'status': 'subscribed',
            'merge_fields': {
                'FNAME': fname,
                'LNAME': lname
            }
        })
        .end(function (err, response) {
            if (response.status < 300 || (response.status === 400 && response.body.title === "Member Exists")) {
                res.send('Signed Up!');
            } else {
                res.send('Sign Up Failed :(');
            }
        });
})

app.listen(3000, function () {
    console.log("Server is running on 3000");
})


// c3af69a28b3601338f594ebf06e70f0f-us10