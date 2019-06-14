var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));
app.set("view engine", "ejs");

var sites = [
        {name: "Snowy", image:"https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg"},
        {name: "Dody", image:"https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg"},
        {name: "Boris", image:"http://santansun.com/wp-content/uploads/2018/11/5b7fdeab1900001d035028dc.jpeg"}
        ];

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/sites", function(req, res){
    res.render("sites", {sites:sites});
});

app.post("/sites", function(req, res){ 
    //get data from form to add to sites array
    var name = req.body.name;
    var image = req.body.image;
    
    var newSite = {name: name, image: image}
    sites.push(newSite);
    
    //redirect: default is to do it as a get request
    res.redirect("/sites");
    });
    
app.get("/sites/new", function(req, res){
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function (){
    console.log("travelpakistan server is running");
});
