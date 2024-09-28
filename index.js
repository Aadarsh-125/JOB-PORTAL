const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Post  = require("./models/post.js")
const methodOverride =  require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

main()
    .then(() => {
        console.log("connection successful");
    })
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/jobs');
};

//create route
app.post("/chats", (req, res) =>{
    let {job_name, about} = req.body;
    let newPost = new Post({
        job_name: job_name,
        about: about,
        created_at: new Date(),
    });
    newPost.save()
    .then((res) => {console.log("chat was saved")})
    .catch((err) =>{console.log(err)});
    res.redirect("/posts");
});

//edit route
app.get("/posts/:id/edit",async (req, res) =>{
    let {id} = req.params;
    let post =await Post.findById(id);
    res.render("edit.ejs", {post});
});

//update route
app.put("/posts/:id",async (req, res) =>{
    let {id} = req.params;
    let {about :about} = req.body;
    let updatedPost =await Post.findByIdAndUpdate(id, {about: about}, {runValidators: true,new: true})
    console.log(updatedPost);
    res.redirect("/posts");
});

//DElete route
app.delete("/posts/:id",async (req, res) =>{
    let {id} = req.params;
    let deletedPost = await Post.findByIdAndDelete(id);
    console.log(deletedPost);
    res.redirect("/posts");
});


//New Route
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
})

//index route
app.get("/posts",async (req, res) =>{
    let posts = await Post.find();
    // console.log(posts);
    res.render("index.ejs", {posts});
})


app.get("/", (req, res) => {
    res.send("root is working");
});

app.listen(8080, () =>{
    console.log("server is listening on port 8080");
});