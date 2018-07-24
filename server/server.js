const path = require('path');
const express = require('express');
//the below join helps us in directly reaching the public folder. Path is an inbuilt module in nodejs
var publicPath = path.join(__dirname,'../public');

const port = process.env.PORT || 3000;
//either the local port or the online server port shall be used. the online server shall be updating process.env.PORT
//assuming heroku type server is being used we need to inform Heroku
//how to start the app and which version of node to used
//update package.json with the following -
//in scipts add start:node server/server.js
//then include engines to mention the exact node version needed
console.log( publicPath);

var app = express();
//for uploading static files on the server
app.use(express.static(publicPath));
//listening to the ebserver at localhost:3000 port
app.listen(port,()=>{
  console.log(`server is up and running on port ${port}`);
});
