const mongoose = require("mongoose");
const post  = require("./models/post.js");

main()
    .then(() => {
        console.log("connection successful");
    })
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/jobs');
};


let allPosts = [
    {
        job_name: "DBA",
        about: "this is very important role for databae handling.",
        created_at: new Date(),
    },
    {
        job_name: "Cloud Engineer",
        about: "A cloud engineer is an IT professional who designs, implements, and manages cloud infrastructure and services. They work with cloud providers like AWS, Azure, and Google Cloud to build and maintain scalable and reliable cloud solutions. Cloud engineers may also help organizations migrate to cloud-based networks by designing multi-cloud configurations and deploying and managing the cloud environment.",
        created_at: new Date(),
    },
    {
        job_name: "MERN stack developer",
        about: "A MERN stack developer is a professional who uses the MERN stack of technologies to build web applications. MERN is an acronym for the four technologies in the stack: MongoDB, Express, React, and Node.js. MERN stack developers use these technologies to design RESTful APIs, ensure web security, and deploy applications. They also need to understand the needs of stakeholders and translate those requirements into technical solutions.",
        created_at: new Date(),
    },
    {
        job_name: "Network Engineer",
        about: "Network engineers design, build, and maintain networks to ensure that devices like phones, computers, and routers can connect with each other.Some skills that are useful for network engineers include scripting, programming, networking, security, systems and services, and data management. While it's not necessary to learn how to code, it can be helpful to learn about programming languages.",
        created_at: new Date(),
    },
    {
        job_name: "MS Excel",
        about: "MicroSoft Excel is a software program created by Microsoft that uses spreadsheets to organize numbers and data with formulas and functions. Excel analysis is ubiquitous around the world and used by businesses of all sizes to perform financial analysis.",
        created_at: new Date(),
    },
];

post.insertMany(allPosts);
