class BaseModel {
    constructor(data, msg) {
        if(typeof data === 'string') { //error msg case
            this.msg = data;
            data = null;
            msg = null;
        }
        if(data) {
            this.data = data;
        }
        if(msg) {
            this.msg = msg;
        }
    }
}

class SuccessModel extends BaseModel { 
    constructor(data, msg, status) {
        super(data, msg);
        this.errno = 0;
        this.status = status;
    }
}

class ErrorModel extends BaseModel {
    constructor(data, msg, status) {
        super(data, msg);
        this.errno = -1;
        this.status = status;
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
};