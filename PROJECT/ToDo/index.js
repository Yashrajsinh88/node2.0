const express = require("express");
const app = express();
const PORT = 8888;

app.use(express.urlencoded({extended : true}));
app.set("view engine" , "ejs");

app.get("/" , (req ,res) => {
    res.send("hello node");
})

app.listen(PORT ,() => {
console.log("Server Started");
});