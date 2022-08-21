const {exec, escape} = require('../db/index');

//login btn function
function login(username, password) {
    //make sure data is portable
    username = escape(username);
    password = escape(password);
    const sqlUser = `select username from user where username=${username} and password=${password};`;

    return exec(sqlUser).then(rows=>{
        if(rows.length){
            return rows[0]; //both username and password is correct
        } else{
            return findUserName(username).then(userRows=>{
                if(userRows.length){
                    return {message: 'Wrong password'}; //username is correct and password is incorrect
                } else{
                    return {message: 'No account found'}; //username doesn't exist
                }
            })
        }
    })
}

//register btn function
function register(username, password) {
    return findUserName(username, password).then(userRows=>{
        if(userRows.length){
            return {message: 'Existing username'}; //account already exists
        } else{
            return saveUser(username, password);
        }
    })
}
//check whether the account exists
function findUserName(username) {
    const sqlUsername = `select username from user where username=${username};`;
    return exec(sqlUsername).then(rows=>{
        return rows;
    })
}

//insert user info into database
function saveUser(username, password) {
    const sql = `insert into user (username, password) value('${username}', '${password}');`;
    return exec(sql).then(res=>{
        const {insertId} = res;
        if(insertId){
            return {username}; //successfully save user
        } else{
            return res;
        }
    })
}

module.exports = {
    login,
    register
};