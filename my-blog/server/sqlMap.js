var sqlMap = {
    getAll: 'SELECT * FROM student',
    getValue: 'SELECT * FROM student WHERE studentid = ?',
    setValue: 'insert into student value(null,?,?)',
    deleteId:"DELETE FROM student WHERE studentid=?"
  }
  
  module.exports = sqlMap;