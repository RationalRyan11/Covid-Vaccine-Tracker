//Get all the dependencies sorted out
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();



//serve static files in express
app.use(express.static(path.join(__dirname, "./public"))); 

//Determine what gets sent upon request
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
});


app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');