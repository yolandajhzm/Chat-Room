class User {
    constructor() {
        this.user = '';
        this.chatRoom = null;
        this.socket = null;
    }
    
    login(data, cb) {
        doLogin(data, cb);
    }

    register(data, cb) {
        doRegister(data, cb);
    }

    logOut() {
        doLogOut();
    }

    connectChat() {
        getChatMsgList((msgList)=>{
            const clientSocket = new ClientSocket();
            const  {socket} = clientSocket;
            this.username = localStorage.getItem('nickName');
            clientSocket.login(this.username, ()=>{
              this.socket = socket;
              this.chatRoom = createChatRoom(socket, msgList);
            })
          })
    }

    sendMsg() {
        const textBox = document.getElementById('m');
        const nickName = localStorage.getItem('nickName');
        const value = textBox.value;
        if(!value) { //prevent from sending empty message 
            return;
        }

        this.socket.emit('sendMsg', {msg: value, nickName})
        textBox.value = '';
    }
}

function doLogin(data, cb) {
    // corresponding to utils/request.js function ajax
    ajax('/api/user/login', {
        method: 'POST', data, success(res){
            handleSignSuccess(res, cb);
        }
    })
}

function doRegister(data, cb) {
    // corresponding to utils/request.js function ajax
    ajax('/api/user/register', {
        method: 'POST', data, success(res){
            handleSignSuccess(res, cb);
        }
    })
}


function doLogOut() {
    localStorage.removeItem('nickName');
    window.location.replace('/sign.html');
}

function handleSignSuccess(res, cb) {
    const {errno, message, data} = res;
    if(errno == -1) {
        showMsgTip(message);
    } else{
        const {result: {username}} = data;
        window.location.replace('/index.html');
        localStorage.setItem('nickName', username);
    }
    cb && cb(res);
}


function getChatMsgList(cb) {
    // corresponding to utils/request.js function ajax
    ajax('/api/chatmsg/list', {
        method: 'GET', success(res){
            const {data: {list}} = res;
            cb && cb(list);
        }
    })
}

