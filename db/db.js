var mysql = require('mysql')

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'api',
});

db.connect((err, res) => {
    if (err) throw err;
    console.log('connected!');
});


exports.getUser = (id, callback) => {
    let sql = `SELECT * FROM api_user WHERE id = ?`;
    db.query(sql, [id], (err, data) => {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    })
}

exports.insertUser = function (data, callback) {
    let sql = `INSERT INTO api_user SET ?`;
    db.query(sql, [data], function (err, result) {
        if (err) {
            callback(err);
        } else {
            callback(null, result);
        }
    })
}

exports.updateUser = (id, data, callback) => {
    let sql = "UPDATE api_user SET ? WHERE id = ?";
    db.query(sql, [data, id], (err, data) => {
        if (err) {
            callback(err)
        } else {
            callback(null, data)
        }
    })
}

exports.deleteUser = (id, callback) => {
    let sql = "DELETE from api_user WHERE id = ?";

    db.query(sql, [id], (err, data) => {
        if (err) {
            callback(err)
        } else {
            callback(null, err);
        }
    })
}