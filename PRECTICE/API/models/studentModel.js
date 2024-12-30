const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    studentName: {type: String, required: true},
    email: {type: String, required: true},
    password: { type: String, required: true},
});

const studentModel = mongoose.model("student" , studentSchema)

module.exports = studentModel;