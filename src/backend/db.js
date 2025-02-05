// Use the MariaDB Node.js Connector
var mysql = require('mysql');

require('dotenv').config();

// 1.) Access the Node File System package
//const fs = require("fs");

// 2.) Retrieve the Certificate Authority chain file (wherever you placed it - notice it's just in the Node project root here)
//const serverCert = [fs.readFileSync("skysql_chain.pem", "utf8")];

// Create a connection pool
var pool = 
mysql.createPool({
    host: "sql-210-300621-matia-barras.mysql.database.azure.com", 
    user: "todo_user", 
    password: "Emf123456",
    port: "3306",
    database: "todo_app"//,
    // 3.) Add an "ssl" property to the connection pool configuration, using the serverCert const defined above
    /*ssl: {
      ca: serverCert
    }*/
  });

// Expose the Pool object within this module
module.exports = Object.freeze({
  pool: pool
});
