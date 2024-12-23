const mongoose = require("mongoose");

const connection = async () =>{
    await  mongoose.connect("mongodb://127.0.0.1/databaseConnect");
    console.log("Database Is Connected");
    
}

module.exports = connection