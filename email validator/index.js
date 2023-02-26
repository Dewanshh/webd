const express = require("express");
const https = require("https");
const request = require("request");

const path = require("path")
const app = express();
app.set('views', path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));




app.get("/", function (req, res) {
    res.render('x');

})

app.get("/result", function (req, res) {
    var query = req.query.search;
    const options = {
        method: 'GET',
        url: 'https://domain-checker7.p.rapidapi.com/whois',
        qs: {
            domain: query
        },
        headers: {
            'X-RapidAPI-Key': '4d5fd1077cmshfc5cc786bf89851p1455b5jsn965425458ab9',
            'X-RapidAPI-Host': 'domain-checker7.p.rapidapi.com',
            useQueryString: true
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        let data = JSON.parse(body);
        res.render("result", {
            data: data,
            query: query
        });
          console.log(body);
        //   console.log(query);
    });
})




app.listen(3000, function (req, res) {
    console.log("Server is running");
});