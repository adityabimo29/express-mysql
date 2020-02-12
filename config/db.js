const mysql = require("mysql");
const {DB_HOST,DB_USER,DB_PASS,DB_NAME} = require('../config/environment');
const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: '',
  database: DB_NAME
});

module.exports = connection;
