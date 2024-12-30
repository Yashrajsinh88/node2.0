const express = require("express");
const studentRouter = require("./routes/studentRoute");
const connection = require("./config/db");
const PORT = 2000;
const app = express();


app.use(express.urlencoded());

app.use("/", studentRouter);

app.listen(PORT , (error) => {
    if (error) {
        console.log(`Error starting server: ${error}` );
    }else{
       connection();
       console.log(`server is connected ${PORT}`); 

    }
});
