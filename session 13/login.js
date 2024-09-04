var express = require("express");
var app = express();
app.use(express.json());

app.post("/login", (req, res) => {
    let{name,email,pwd,address} = req.query;
    if (name == "dwara" && email == "admin@gmail.com" && pwd == "admin" && address == "chennai") {
        res.json({ "msg": "you are correct" });
    } else {
        res.json({ "msg": "you are wrong" });
    }
});

app.listen(8080, () => {
    console.log("server started");
});
