//source
//https://codingdict.com/questions/76847
//https://segmentfault.com/a/1190000011538416
//https://github.com/socketio/socket.io
//https://www.scaleway.com/en/docs/tutorials/socket-io/
//https://socket.io/docs/v3/emitting-events/
//https://ably.com/topic/socketio

const socketIO = require('socket.io');
const {saveChatMessage} = require('./controller/chat');

class IOuser {
  constructor() {
    this.users = [];
    this.usersInfo = [];
  }
  saveUser(user){
    this.users.push(user.name);
    this.usersInfo.push(user);
  }
}

class IO extends IOuser {
  constructor(http) {
    super();
    this.io = socketIO(http); //initialize
    this.io.on('connection', (socket)=>{
      this.connectSoc(socket);
    })
  }

  connectSoc(socket) {
    this.onLogin(socket);
    this.onSendMsg(socket);
  }

  onLogin(socket) {
    socket.on('login', (user)=>{
      if(this.users.indexOf(user.name) > -1) { //check for repeat login
        socket.emit('loginError', user, this.usersInfo); //sending to sender-client only
        socket.nickName = user.name;
      } else{ //login successfully
        this.saveUser(user);
        socket.emit('loginSuccess', user, this.usersInfo);
        socket.nickName = user.name;
        this.io.emit('system', {name: user.name, success: 'enter'}); //sending to all clients, include sender
      }
    })
  }

  onSendMsg(socket) {
    socket.on('sendMsg', (data)=>{
      const params = createReceiveMsgParams(data);
      socket.broadcast.emit('receiveMsg', params); //emit to everyone but socket
      socket.emit('receiveMsg', params); //emit to socket
      saveChatMessage(data.msg, data.nickName);
    })
  }
}

function createReceiveMsgParams(data) {
  return {name: data.nickName, msg: data.msg};
}

module.exports = {
  IO
};