const express = require("express");
const connection = require("./config/db");
const PORT = 8000;
const app = express();

app.set("view engine", "ejs")

app.get("/" , (req , res) => {
    // res.send("hello index 00")
     res.render("index")
})

app.get("/home" , (req , res) => {
    res.render("home")
})

app.get("/contact", (req , res) => {
    res.render("contact")   
})

app.listen(PORT, () =>{
    console.log(`server is runing port ${PORT}`);

    connection();
})