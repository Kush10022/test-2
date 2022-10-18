var express = require("express");
var path = require("path");
const app = express();
app.use(express.static("public"));
var dataservice = require('./dataservice.js');
const port = process.env.PORT || 8080;
function onhttp(){
  console.log("Express http server listening on port",port);
}

app.get("/", function(req,res){

    res.send("<body><h2>Declaration </h2> <p> the test text is displayed in oaragraph as shown in screenshot.<br> <br> I acknowledge the college's academic integrity policy - and my own integrity - remain in effect <br> whether my work is done remotwly or onsite. Any test or assignemtn is an act of trust between <br> me and my insctructor and especially with my classmate.. even when no one is watching. I <br> declare I will not break that trust. <br> <br> Name: <mark><b>Kush Patel</b></mark> <br> <br> Student Number: <mark><b> 104006218</b></mark>"+
    "<p><a href='/BSD'>Click to visit BDS Students</a></p>"+
    "<p><a href='/highGPA'>Click to see who has the highest GPA</a></p></body>") ;
});

app.get('/BSD', function (req, res) {
    dataservice.BSD().then((data) => {
      res.json(data);
    });
  });

  app.get('/highGPA', function (req, res) {
    dataservice.highGPA().then((data) => {
      res.json(data);
    });
  });

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
