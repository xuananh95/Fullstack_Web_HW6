const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");

// View engine set up
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware to register public folder
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index", {
        image: "home-bg",
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        image: "about-bg",
    });
});
app.get("/post", (req, res) => {
    res.render("post", {
        image: "post-bg",
    });
});
app.get("/contact", (req, res) => {
    res.render("contact", {
        image: "contact-bg",
    });
});

app.listen(5000, () => {
    console.log("server started");
});
