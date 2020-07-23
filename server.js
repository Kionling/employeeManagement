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
                "View Employees",
                "Update Employees"

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
            case "Update Employee":
                updateEmployee();
                
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
          if (input.doMore === true){
            //   doMore();
            init();
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


function rolePrompt(){
    inquirer.prompt([
        {
            type: "input",
            message: "What title does your employee have?",
            name: "title"
        },
        {
            type: "number",
            message: "What is this employee's salary?",
            name: "salary"
        },
        {
            type: "number",
            message: "What is the employee's department id",
            name: "departmentID"
        },

    ]).then(function(response) {
        connection.query(
            "INSERT INTO role SET ?",
            {
                title: response.title,
                salary: response.salary,
                department_id: response.departmentID
            },
            function(err) {
                if(err) throw err;
                console.log('Added new role!')
                doMore();
            }
        )
    })
};


function employeePrompt(){
    inquirer.prompt([
        {
            type: "input",
            message:"What is the employee's first name?",
            name: "first_name"
        },
        {
            type: "input",
            message:"What is your employee's last name?",
            name: "last_name"
        },
        {
            type: "number",
            message:"What is your employee's role id?",
            name: "role_id"
        },
        {
            type: "number",
            message:"Manager id?",
            name: "manager_id"
        }


    ]).then(function(response){
        connection.query(
            "INSERT INTO employee SET ?",
            {
                first_name: response.first_name,
                last_name: response.last_name,
                role_id: response.role_id,
                manager_id: response.manager_id
            },
            function(err) {
                if (err) throw err;
                console.log("You inserted a new employee successfully!");

                doMore();
              }        
        )
    })
}

function viewDep(){
    connection.query(
        "SELECT * FROM department", 
        function(err, data){
            if(err) throw err;
            console.table(data);
            doMore();
        }
    )
}

function viewRoles(){
    connection.query(
        "SELECT * FROM role", 
        function(err, data){
            if(err) throw err;
            console.table(data);
            doMore();
        }
    )
}

function viewEmployees(){
    connection.query(
        "SELECT * FROM employee", 
        function(err, data){
            if(err) throw err;
            console.table(data);
            doMore();
        }
    )
}


async function updateEmployee(){
    var roles = [];
    var employees = [];
    var allEmployees;
    var allRoles;
    await connection.query("SELECT * FROM role", function(err, input){
        if (err) throw err;
        for(var i=0; i < input.length; i++){
            if(input[i].title){
                roles.push(input[i].title);
            }
        }
        allroles = input;
    })
    await connection.query("SELECT * FROM employee", function(err, input){

    })
}

