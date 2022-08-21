const express = require('express');
const jwt = require('jsonwebtoken');
const {login, register} = require('../controller/user');
const router = express.Router();
const secretKey = 'Dom ^_^';
const {SuccessModel, ErrorModel} = require('../model/resModel');

router.post('/login', function(request, response, next) {
    const {username, password} = request.body;
    login(username, password).then(result=>{
        if(result.username) {
            const tokenStr = handleUserToken(result.username);
            return response.json(new SuccessModel({result, token: tokenStr}));
        } else{
            return response.json(new ErrorModel({}, result.message));
        }
    })
})

router.post('/register', function(request, response, next) {
    const {username, password} = request.body;
    register(username, password).then(result=>{
        if(result.username) {
            const tokenStr = handleUserToken(result.username);
            return response.json(new SuccessModel({result, token: tokenStr}));
        } else{
            return response.json(new ErrorModel({}, result.message));
        }
    })
})

function handleUserToken(username) {
    const tokenStr = 'Bearer' + jwt.sign({username}, secretkey, {expiresIn: 3600*24*3});
    return tokenStr;
}

module.exports = {
    secretKey,
    router
};
