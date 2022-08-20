//source
//https://www.npmjs.com/package/promise-mysql
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
//http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/jsref_escape.asp.html#gsc.tab=0

const mysql = require('mysql')
const MYSQL_CONF = require('../config/db')

const connection = mysql.createConnection(MYSQL_CONF) 
connection.connect()//connect to database

function exec(sql) {
    const promise = new Promise((resolve, reject) => {
        connection.query(sql, (err, result) => {
            if(err){
                reject(err) //reject will return a reason for for rejection
                return
            }
            resolve(result) //resolve will return result
        })
    })
    return promise
}

module.exports = {
    exec,
    escape: mysql.escape //make sure db is portable
}