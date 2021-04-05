//Get all the dependencies sorted out
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();



//Set the view engine to the one we have
app.set("view engine", "ejs");

//I think this is for setting up the 'path'usages
app.use('/', router);
//serve static files in express
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false })); // use the middleware “express.urlencoded()” so that request.body retrieves the posted values

// Determine what is returned upon a request. Now we render index.ejs
router.get("/", function (req, res) {
      res.render(__dirname + "/views/index.ejs");
  });



app.listen(process.env.port || 3000);

console.log('Running at Port 3000');