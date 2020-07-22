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
      start();
  });
  

  async function init(){


    
  }