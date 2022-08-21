const {exec} = require('../db/index');

function findUserList() {
    const sql = `select * from user;`;
    return exec(sql).then(rows=>{
        return rows;
    })
}

module.exports = {
    findUserList
};