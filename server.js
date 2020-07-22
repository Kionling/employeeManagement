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
                deparmentPrompt();
                break;
            case "Add Role":
                addRole();
                break;
            case "Add Employee":
                employeePrompt();
                break;
            case "Add Manager":
                managerPrompt();
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
//generating all functions for prompt responses and appending inputs
function employeePrompt(){};
  function addEmployee(){};

  function deparmentPrompt()
  function addDepartment();

  function managerPrompt();
  function addManager();
