const express = require("express");
const dashboardRouter = require("./routes/dashboardRoute");
const app = express();
const PORT = 9094;
const path = require("path");
const connection = require("./config/db");

app.use(express.urlencoded());


app.set("view engine" , "ejs");

app.use("/" ,  dashboardRouter);
app.use("/assets", express.static(path.join(__dirname , "/assets")))

app.listen(PORT ,(err) => {
    if (err) {
        console.log("Error Starting ");
        return;
    }
    connection()
    console.log("server started");  
});