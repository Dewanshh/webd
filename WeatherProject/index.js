const express = require("express");
const https = require("https");
const app = express();

app.get("/:id", function (req, res) {

    res.send("This id is "+req.params.id+" Name is"+req.params.name);
    // const url = "https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=39.099724&lon=-94.578331&dt=1643803200&appid=172a34d21e487ea37351af9c7b3c9689";
    // https.get(url, function (response) {
    //     console.log(response);
    //     res.send("Server is up and Running");

    // });
    // // res.sendFile(__dirname + "/index.html");
})
app.listen(3000, function () {
    console.log("Running Server Port 3000");
})