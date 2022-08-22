//source
//https://www.cometchat.com/tutorials/how-to-build-a-chat-app-with-socket-io-node-js

class ClientSocket {
    constructor() {
        this.socket = io();
    }
    login(username, cb){
        this.socket.emit('login', {name: username});
        cb();
    }
}

function createChatRoom(socket, msgList) {
    return new ChatRoom(socket, msgList);
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
        this.msgList.forEach(msginfo=>{
            const {message: msg, username: name, create_time} = msginfo;
            createMessageNode({msg, name, create_time});
        })
      }

    receiveMsg(){
        this.socket.on('receiveMsg', obj=>{
            const time = new Date();
            obj.create_time = time;
            createMessageNode(obj);
        })
      }
}

function createMessageNode(obj){
    const messagesNode = document.getElementById('messages');
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
    messagesNode.append(liNode);
    scrollToBottom(messagesNode);
  }
function scrollToBottom(msg) {
    if(!msg) 
        return;
    msg.scrollTop = msg.scrollHeight;
}

