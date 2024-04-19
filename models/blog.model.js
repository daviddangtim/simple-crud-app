const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
        name:{
            type: String,
            required:[true, "Please enter product name"]
        },
        userName:{
            type: String,
            required:true,
        },
        age:{
            type:Number,
            required: true,
        },
        image:{
            type: String,
            required:false,
        },
    },
    {
        timestamps:true
    }
    );