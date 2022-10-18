const fs = require('fs');
let stu = [];

module.exports.initialise = function () {
    return new Promise( (resolve, reject) => {
        fs.readFile("./students.json", (err, data) => {
            if (err) { reject(err); }
            stu = JSON.parse(data);
            resolve(data);
        });
    });
  }

module.exports.BSD = function () {
    return new Promise((resolve, reject)=> {
        var arr = [];
        for (let i= 0; i < stu.length; i++) {
          if (stu[i].program == "BSD") {
            arr.push(stu[i]);
          }
        }
        if (stu.length == 0) {
          reject("No results returned");
        }
        resolve(arr);
      });
  };


  module.exports.highGPA = function () {
    return new Promise((resolve, reject)=> {
        var maxGPA = stu[0].gpa;
        var arr = [];
        for (let i= 0; i < stu.length; i++) {
            if (stu[i].gpa > maxGPA){
                maxGPA = stu[i].gpa;
                arr.push(stu[i]);
            }
    
        }
        if (stu.length == 0) {
          reject("No results returned");
        }
        resolve(arr);
      });
      
  
  };

