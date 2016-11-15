var mysql = require('mysql');
var conectionPool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: '',
    database: "hireapplicants"
});
var dbQuery = function dbQuery(query, indetifiers, cb){
    conectionPool.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(mysql.format(query, indetifiers));
        connection.query(query, indetifiers, function (err, rows) {
            connection.release();
            if (err) {
                console.log(err)
            }
            cb(rows);
        });
    });
}
module.exports.dbQuery = dbQuery;