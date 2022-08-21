class BaseModel {
    constructor(data, message) {
        if(typeof data === 'string') { //error message case
            this.message = data;
            data = null;
            message = null;
        }
        if(data) {
            this.data = data;
        }
        if(message) {
            this.message = message;
        }
    }
}

class SuccessModel extends BaseModel { 
    constructor(data, message, status) {
        super(data, message);
        this.errno = 0;
        this.status = status;
    }
}

class ErrorModel extends BaseModel {
    constructor(data, message, status) {
        super(data, message);
        this.errno = -1;
        this.status = status;
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
};