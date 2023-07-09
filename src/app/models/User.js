const connection = require('../../config/mysql')

const User = {};

User.getAll = (callback) => {
    const query = 'SELECT * FROM user';
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Lỗi truy vấn:', error);
            callback(error, null);
            return;
        }
        callback(null, results);
    });
};

User.findByUsername = (username, callback) => {
    const query = 'SELECT * FROM user where username = ?';
    connection.query(query, [username], (error, results) => {
        if (error) {
            console.error('Lỗi truy vấn:', error);
            callback(error, null);
            return;
          }
          if (results.length === 0) {
            const notFoundError = new Error('Người dùng không tồn tại');
            callback(notFoundError, null);
            return;
          }
          const user = results[0];
          callback(null, user);
    });
}

User.updatePassword = (username, newPassword, callback) => {
    const query = 'Update user set password = ? where username = ?';
    connection.query(query, [newPassword, username], (error, results) => {
        if (error) {
            console.error('Lỗi truy vấn:', error);
            callback(error, null);
            return;
          }
          if (results.length === 0) {
            const notFoundError = new Error('Người dùng không tồn tại');
            callback(notFoundError, null);
            return;
          }
          const user = results[0];
          callback(null, user);
    });
}

User.deleteByUsername = (username, callback) => {
    const query = 'Delete from user where username = ?';
    connection.query(query, [username], (error, results) => {
        if (error) {
            console.error('Lỗi truy vấn:', error);
            callback(error, null);
            return;
          }
          callback(null, results);
    });
}


User.login = (username, password, callback) => {
    const query = 'SELECT * FROM user where username = ? and password = ?';
    connection.query(query, [username, password], (error, results) => {
        if (error) {
            console.error('Lỗi truy vấn:', error);
            callback(error, null);
            return;
          }
          if (results.length === 0) {
            const notFoundError = new Error('Người dùng không tồn tại');
            callback(notFoundError, null);
            return;
          }
          const user = results[0];
          callback(null, user);
    });
}


User.createAccount = (name, username, password, callback) => {
    const query = 'Insert into user(name, username, password) values (?, ?, ?)';
    console.log(name)
    connection.query(query, [name, username, password], (error, results) => {
        if (error) {
            console.error('Lỗi truy vấn:', error);
            callback(error, null);
            return;
        }
        callback(null, results);
    });
}


// Các phương thức khác của User model

module.exports = User;