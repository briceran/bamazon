var mysql = require("mysql");
var inquirer = require("inquirer");
require('console.table');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Newton1993",
  database: "bamazon"
});

function start(){
// Create a "Prompt" with a series of questions.
inquirer.prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What is the id of the product you would like?",
      name: "prod_id"
    },
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    },
    // Here we create a basic password-protected text prompt.
    {
      type: "input",
      message: "How many do you want?",
      name: "quantity"
    },
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    }
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inquirerResponse.confirm) {
      console.log("\nOkay, we have " + inquirerResponse.quantity + "of those.\n");
      connection.query("SELECT product_name, department_name,price,stock_quantity FROM products WHERE item_id ="+ inquirerResponse.prod_id, function(err, res) {
        if (err) throw err;
        var stockQ = Number(res[0].stock_quantity);
        if(stockQ >= inquirerResponse.quantity){
          //update SQL table and show total cost
          var updateQ = stockQ - inquirerResponse.quantity;
          var cost = res[0].price * Number(inquirerResponse.quantity);

          var sql = "UPDATE products SET stock_quantity ="+updateQ+" WHERE item_id ="+inquirerResponse.prod_id;
          connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) updated");
            console.log("That will cost: $" + cost+"\n");
          });

        } else {
          console.log("Insufficient quantity");
        }
        console.table(res);
        console.log(res[0].stock_quantity);
      });
      afterConnection();
      setTimeout(function(){ start(); }, 3000);
    }
    else {
      console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
      afterConnection();
      setTimeout(function(){ start(); }, 3000);
    }
  });

}

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
  setTimeout(function(){ start(); }, 2000);


});

//initial print menu
function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    //console.log(res);
    console.table(res);
  });
}
