const mongoose = require("mongoose");

const connection = async () => {
   await mongoose.connect("mongodb://localhost:27017/databaseconnect");
   console.log("database is connected");
}

module.exports = connection