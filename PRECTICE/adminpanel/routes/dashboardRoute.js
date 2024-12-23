const express = require("express");
const userModel = require("../model/userModel");

const dashboardRouter = express.Router()

dashboardRouter.get("/" , (req , res) => {
    res.render("dashboard");
})

dashboardRouter.get("/signup" , (req , res) => {
    res.render("signup")
})

dashboardRouter.post("/insertData" , async (req ,res) => {
    console.log(req.body);
  try{
    await userModel.create(req.body)

    res.redirect("/signIn")
  }  catch(err){
    console.log(err);
    
  }
});

dashboardRouter.get("/signIn" , (req ,res) => {
  res.render("signIn");
})
module.exports = dashboardRouter;

