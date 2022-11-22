/*
LINK OF CYCLIC: https://glorious-puce-suspenders.cyclic.app/
*/

var express = require("express");
var path = require("path");
const app = express();
const exphbs = require('express-handlebars');
app.use(express.static("public"));
app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main" }));
app.set('view engine', '.hbs');
var dataservice = require('./dataservice.js');
const port = process.env.PORT || 8080;
function onhttp(){
  console.log("Express http server listening on port",port);
}

app.get("/", function(req,res){
  res.render("home");
});

app.get('/BSD', function (req, res) {
    dataservice.BSD().then((data) => {
      res.render("students",{students:data});
    }).catch((err)=>{
        res.send(err);
    })
});


  app.get('/highGPA', function (req, res) {
    dataservice.highGPA().then((data) => {
      res.render("student",{student:data[0]});
    }).catch((err)=>{
        res.send(err);
    })
});

app.get("/allStudents",(req,res)=>{
  dataservice.allStudents().then((data)=>{
      res.render("students",{students:data});
  }).catch((err)=>res.send(err));
})


  app.use((req, res) => {
    res.status(404).send("Page Not Found");
  });

  dataservice.initialise().then(function () {
    app.listen(port, onhttp);
   })
   .catch(function (err) {
     console.log('Failed to start!' + err);
   });
  
//app.listen(port, onhttp);
