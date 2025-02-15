const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
    {
        userName:{
            type:String,
            required: true,
        },

       email:{
        type:String,
        required:true,
       },

        Password:{
            type:String,
            required:true,
        },
    });

    const userModel = mongoose.model("adminPanelData" , userSchema);

    module.exports = userModel;