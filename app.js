//Get all the dependencies sorted out
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const sqlite3 = require("sqlite3").verbose();


//Set the view engine to the one we have
app.set("view engine", "ejs");

//I think this is for setting up the 'path'usages
app.use('/', router);

//serve static files in express
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false })); // use the middleware “express.urlencoded()” so that request.body retrieves the posted values

// Connection to the SQlite database
const db_name = path.join(__dirname, "data", "apptest.db");
console.log("Database full path - " + db_name);
const db = new sqlite3.Database(db_name, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful connection to the database 'apptest.db'");
});


// Creating user table (userID, Name, Surname, Date Vaccinated (TBI), Type of Vaccine (TBI), Location )
const sql_create = `CREATE TABLE IF NOT EXISTS User (
    User_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name VARCHAR(100) NOT NULL,
    Surname VARCHAR(100) NOT NULL,
    Location VARCHAR(100) NOT NULL
  );`;


//This just runs sql code to make a new table
db.run(sql_create, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Successful creation of the 'User' table")});
  
// Creates string for sql command
const sql_insert = `INSERT INTO User (Name, Surname, Location) VALUES
    ('Ryan','Davies','Claremont'),
    ('Garviel','Loken', 'Cadia');`;

//Runs sql string. 
db.run(sql_insert, (err) => {
      if (err) {
        return console.error(err.message);
      }
      //console.log("Successful creation of 2 users");
    });







// Used to render index.ejs and use database info
router.get("/", function (req, res) {
    const sql = "SELECT * FROM User";
    db.all(sql, [], (err, rows) => {
      if (err) {
        return console.error(err.message);
      }

      //Just playing around with this for debugging purposes
      //rows.forEach((row) => {
      //  console.log(row.Name);
      //});
  
      //console.log("rows - " + rows.length);
      //__dirname resolves to your project folder.
      res.render(__dirname + "/views/index.ejs", {
        status: "No status",
        users: rows,
      });
    });
  });



app.listen(process.env.port || 3000);

console.log('Running at Port 3000');