const fs = require('fs');
let stud = [];

module.exports.initialise = function () {
    return new Promise( (resolve, reject) => {
        fs.readFile("./students.json", (err, data) => {
            if (err) { reject(err); }
            stud = JSON.parse(data);
            resolve(data);
        });
    });
  }

module.exports.BSD = function () {
    return new Promise((resolve, reject)=> {
        var arr = [];
        for (let i= 0; i < stud.length; i++) {
          if (stud[i].program == "BSD") {
            arr.push(stud[i]);
          }
        }
        if (stud.length == 0) {
          reject("No results returned");
        }
        resolve(arr);
      });
  };
  
  module.exports.highGPA = function () {
    return new Promise((resolve, reject)=> {
        var maxGPA = stud[0].gpa;
        var arr = [];
        for (let i= 0; i < stud.length; i++) {
            if (stud[i].gpa > maxGPA){
                maxGPA = stud[i].gpa;
                arr.push(stud[i]);
            }
    
        }
        if (stud.length == 0) {
          reject("No results returned");
        }
        resolve(arr);
      });
      
  
  };
  module.exports.allStudents = ()=>{
    return new Promise ((resolve,reject)=>{
        if(students.length > 0){
            resolve(students);
        }
        else{
            reject("No data avaiable");
        }
    })
}

