const express = require("express");
const https = require("https");
const path = require("path")
const app = express();

app.set('views', path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render('search');
})


app.get('/result', (req, res) => {

    let search = req.query.search;
    res.render('search');
    var city;
    const u = "https://api.openweathermap.org/geo/1.0/direct?q=" + search + "&limit=5&appid=172a34d21e487ea37351af9c7b3c9689";
    https.get(u, function (res) {
        res.on('data', (d) => {
            city = JSON.parse(d);
            console.log(city[0].lat + " " + city[0].lon);
            var lat = city[0].lat;
            var lon = city[0].lon;
            const url = "https://api.openweathermap.org/data/3.0/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,daily&appid=172a34d21e487ea37351af9c7b3c9689";
            https.get(url, function (res) {
                res.on('data', (d) => {
                    const data = JSON.parse(d);
                    const x = data.current.temp;
                    console.log(x-273);
                   
                });
                
            })

        });
    });

    console.log(req.query.search)

})

app.listen(3000, function (req, res) {
    console.log("Running Server 3000");
})