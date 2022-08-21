class ClientSocket {
    constructor() {
        this.socket = io();
    }
    login(username, cb){
        this.socket.emit('login', {name: username});
    }
}