//source
//https://www.cometchat.com/tutorials/how-to-build-a-chat-app-with-socket-io-node-js

class ClientSocket {
    constructor() {
        this.socket = io();
    }
    login(username, cb){
        this.socket.emit('login', {name: username});
        loginSuccess(this.socket, cb);
        loginError(this.socket, cb);
    }
}

function loginSuccess(socket, cb) {
    socket.on('loginSuccess', (user, userList)=>{ //listen to loginSuccess event, corresponding code ../server/socketIO.js
        cb && cb(user, userList);
    })
}

function loginError(socket, cb) {
    socket.on('loginError', (user, userList)=>{ //listen to loginError event, corresponding code ../server/socketIO.js
        cb && cb(user, userList);
    })
}

function createChatRoom(socket, msgList) {
    return new createChatRoom(socket, msgList);
}

class ChatRoom{
    constructor(socket, msgList) {
        this.socket = socket;
        this.msgList = msgList;
        this.createRoom();
    }
    
    createRoom(){
        this.createMsgList();
        this.receiveMsg();
    }

    createMsgList(){
        this.msgList.forEach(msgInfo => {
            const {message: msg, username: name, createTime} = msgInfo;
            createMessageNode({msg, name, createTime});
        });
    }

    receiveMsg(){
        this.socket.on('receiveMsg', obj=>{
            const time = new Date();
            obj.createTime = time;
            createMessageNode(obj);
        })
    }
}

function createMessageNode(obj) {
    const messageNode = document.getElementById('messages');
    const liNode = document.createElement('li');
    const nickName = localStorage.getItem('nickName');
    const isMe = obj.name === nickName;
    const name = isMe ? 'me' : obj.name;

    const msgNode = 
    '<div class="msg-box">' +
  
      '<div class="msg-box__header">'+
        '<span class="msg-box__header-name">'+name+'</span>'+
        '<span class="msg-date">'+ formatDate(obj.create_time) +'</span>'+
      '</div>' +
      '<p>'+obj.msg+'</p>'+
    
    '</div>';
    liNode.innerHTML = msgNode;
    messageNode.append(liNode);
    scrollToBottom(messageNode);
}

function scrollToBottom(msg) {
    if(!msg) 
        return;
    msg.scrollTop = msg.scrollHeight;
}