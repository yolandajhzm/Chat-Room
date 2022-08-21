const {exec, escape} = require('../db/index');

//save chat messages to database using exec(sql) function
function saveChatMessage(message, username){
    const sql = `insert into chatmsg (message, username) value('${message}', '${username}');`;
    return exec(sql).then(res=>{
        return res;
    })
}

//retrieve chat messages from database
function getMsgList() {
    const sql = `select * from chatmsg order by id asc;`;
    return exec(sql).then(rows=>{
        return rows;
    })
}

module.exports = {
    saveChatMessage,
    getMsgList
};