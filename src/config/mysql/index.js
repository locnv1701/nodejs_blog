const mysql = require('mysql');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'deadpool89',
    database: 'nodejs_test_db'
};
const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error('Connect MySQL failure:', err);
    return;
  }
  console.log('Connected to MySQL database!');
});

module.exports = connection;