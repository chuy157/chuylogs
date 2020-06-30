const mysql = require('mysql');
const dbConfig = require('./db');
const sqlMap = require('./sqlMap.js');

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true    // 多语句查询
});

module.exports = {
  getValue(req, res, next) {
    var id = req.query.id;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getValue;
      connection.query(sql, [id], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  setValue(req, res, next) {
    var name = req.body.name;
    var age = req.body.age;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.setValue;
      connection.query(sql, [name, age], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  getAll(req, res, next) {
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getAll;
      connection.query(sql,(err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  deleteId(req, res, next) {
    var id = req.body.id;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.deleteId;
      connection.query(sql,[id],(err, result) => {
          res.json(result);
          connection.release();
      })
    })
  }

}