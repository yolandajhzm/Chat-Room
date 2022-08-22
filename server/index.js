//source
//https://www.geeksforgeeks.org/express-js-express-static-function/
//https://www.topcoder.com/thrive/articles/authentication-and-authorization-in-express-js-api-using-jwt

const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const {IO} = require('./socketIO');
const {ErrorModel} = require('./model/resModel');
const bodyParser = require('body-parser');
const {router: userRouter, secretKey} = require('./routes/user');
const usersChat = require('./routes/chat');

app.use('/', express.static(path.join(__dirname, '../www')));
new IO(http);

//app.use(expressJWT({credentialsRequired: false, secret: secretKey}).unless({path: [/^\/api\/user\//]}));

app.use(bodyParser.json());
app.use('/api/user', userRouter);
app.use('/api/chatmsg', usersChat);

//error handling
app.use((erro, request, response, next) => {
  if (erro.name === 'UnauthorizedError') {
    response.json(new ErrorModel({}, 'UnauthorizedError', 401));
    return;
  }
  response.json(new ErrorModel({}, 'unknown error', 500));
})

//set up localhost
http.listen(3000, function(){
  console.log('listening on *:3000'); 
})

