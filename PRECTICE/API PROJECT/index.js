const express = require("express");
const studentRouter = require("./routes/studentRoute");
const connection = require("./config/db");
const dotenv = require("dotenv")
const PORT = 3000;
const app = express();

dotenv.config();

app.use(express.urlencoded());

app.use("/", studentRouter);

app.listen(process.env.PORT , (error) => {
    if (error) {
        console.log(`Error starting server: ${error}` );
    }else{
       connection();
       console.log(`server is connected ${PORT}`); 

    }
});
