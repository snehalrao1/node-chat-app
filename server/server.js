const path = require('path');
//const http = require('http');

const express = require('express');
//const socketIO = require('socket.io');
//socketio is for establishing a connection between the client and the server. A socketIO
//needs to be created at both the client and server for communication

//In addition by doing this a list of functions are now available for use at client side
//for communicating with the server - at /socket.io/socket.io.js

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
//var server = http.createServer(app);
//using http server instead of express server

//for uploading static files on the server
app.use(express.static(publicPath));

//var io = socketIO(server);
//passing the server that will be used by the socket. This socket can now create connections
/*
io.on('connection',(socket)=>{
  console.log('New user connected');

  socket.on('disconnect',()=>{
    console.log('User disconnected');
  });

});*/
//this allows us to listen to events. One of the popular ones is 'connection' whenever a new connection is created


//listening to the webserver at localhost:3000 port
server.listen(port,()=>{
  console.log(`server is up and running on port ${port}`);
});
