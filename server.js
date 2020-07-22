var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "password",
    database: "workplace_DB"
  });
  connection.connect(function(err) {
      if (err) throw err;
    //   init();
  });
  

function init(){
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            choices: [
                "Add Department",
                "Add Role",
                "Add Employee",
                "Add Manager",
                "View Workplace"
            ],
            name: "decision"
        }
    ]).then( function(input){
        switch(input.decision){
            case "Add Department": 
                addDepartment();
                break;
            case "Add Role":
                addRole();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Add Manager":
                addManager();
                break;
            default: init();
        }
    });
  }

  function doMore(){
      inquirer.prompt(
          {
              type: "confirm",
              message: "Would you like to do more?",
              name: "doMore"
          }
      ).then(function(input){
          if (input === true){
              init();
          }
          else{
              connection.end();
          }
      })
  }