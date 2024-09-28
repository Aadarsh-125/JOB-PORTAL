const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    job_name : {
        type: String,
        required: true
    },
    about :{
        type : String,
        required: true
    },
    created_at : {
        type : Date,
        required:  true
    },
});

const Post = mongoose.model("Post", jobSchema);

module.exports = Post;