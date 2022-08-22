const express = require('express');
const {login, register} = require('../controller/user');
const router = express.Router();
const {SuccessModel, ErrorModel} = require('../model/resModel');

router.post('/login', function(request, response, next) {
    const {username, password} = request.body;
    login(username, password).then(result=>{
        if(result.username) {
            return response.json(new SuccessModel({result}));
        } else{
            return response.json(new ErrorModel({}, result.message));
        }
    })
})

router.post('/register', function(request, response, next) {
    const {username, password} = request.body;
    register(username, password).then(result=>{
        if(result.username) {
            return response.json(new SuccessModel({result}));
        } else{
            return response.json(new ErrorModel(result, result.message));
        }
    })
})

module.exports = {
    router
};


