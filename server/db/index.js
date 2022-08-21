//source
//https://www.npmjs.com/package/promise-mysql
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
//http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/jsref_escape.asp.html#gsc.tab=0

const mysql = require('mysql');
const MYSQL_CONF = require('../config/db');

const connection = mysql.createConnection(MYSQL_CONF);
connection.connect()//connect to database

function exec(sql) { //why do i have to use promise here---without using promise, .then cannot be used after 'connection.query'
    const promise = new Promise((resolve, reject) => { //promise has three states: pending, fulfilled, rejected
        connection.query(sql, (err, result) => {
            if(err) {
                reject(err); //reject will make promise rejected
                return;
            }
            resolve(result); //resolve will make promise fulfilled
        })
    })
    return promise;
}

module.exports = {
    exec,
    escape: mysql.escape //make sure db is portable
};