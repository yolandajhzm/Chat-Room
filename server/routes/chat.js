const express = require('express');
const{getMsgList} = require('../controller/chat');
const router = express.Router();
const{SuccessModel} = require('../model/resModel');

router.get('/list', function(request, response, next) {
    getMsgList().then(rows=>{
        response.json(new SuccessModel({list: rows}));
    })
})

module.exports = router;


