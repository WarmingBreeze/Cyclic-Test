const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.get("/", function(req,res){
    res.send("Server is working fine.");
});

app.listen(3000, function(){
    console.log('Server started on port 3000');
});