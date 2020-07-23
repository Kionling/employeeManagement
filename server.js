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
      init();
  });
  

function init(){
    inquirer.prompt([
        {
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
                "Add Department",
                "Add Role",
                "Add Employee",
                "View Roles",
                "View Departments",
                "View Employees"

            ],
            name: "decision"
        }
    ]).then( function(input){
        switch(input.decision){
            case "Add Department": 
                deparmentPrompt();
                break;
            case "Add Role":
                rolePrompt();
                break;
            case "Add Employee":
                employeePrompt();
                break;
            case "View Departments":
                viewDep();
                break;
            case "View Roles":
                viewRoles();
                break;
            case "View Employees":
                viewEmployees();
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
              doMore();
          }
          else{
              connection.end();
          }
      })
  }
//generating all functions for prompt responses and appending inputs

function deparmentPrompt(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is your deparment name?",
            name: "name"
        }
    ]).then(function(input) {
        connection.query (
            "INSERT INTO department SET ?",
            {
                name: input.name,
            },
            function(err, res) {
                if (err, res){
                    console.log(res.affectedRows + "Department added! \n");
                    doMore();
                }
            }
        )
    })
};





