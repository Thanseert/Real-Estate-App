const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/UserDB", {UseNewUrlParser: true}).then(() => {
    console.log("success");
}).catch((err) => {
    console.log(err);
})


app.get("/", function(req, res){
    console.log("testing");
});


app.listen(3000, function(req, res){
    console.log("App runnning on port 3000 !!");
});