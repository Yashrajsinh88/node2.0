const express = require("express");
const studentModel = require("../models/studentModel");

const studentRouter = express.Router()
const bcrypt = require("bcrypt");

studentRouter.get("/" , async (req, res) => {
    let getStudentData = await studentModel.find({});


    res.status(200).json({message:"hello from this page"});
});

studentRouter.post("/addStudent", async (req , res) => {

    try{
        req.body.password = await bcrypt.hash(req.body.password,10)
        await studentModel.create(req.body);
        res.status(201).json({message: "Student added successfully"});
    }catch (err) {
        res.status(400).json({error:err.message});
    }
});


studentRouter.delete("/deleteStudent/:id", async (req , res) => {

    try{
         await studentModel.findByIdAndDelete(req.params.id);
       
       return res.status(200).json({message: "Student deleted successfully"});
    }catch (error) {
        res.status(400).json({message: "Student not fount"});
    }
});


studentRouter.put("/updateStudent/:id", async (req , res) => {

    try{
         await studentModel.findByIdAndUpdate(req.params.id, req.body);
       return res.status(200).json({message: "Student updated successfully"});
    }catch (err) {
      return  res.status(404).json({message: "Student not fount"});
    }
}); 

module.exports = studentRouter;