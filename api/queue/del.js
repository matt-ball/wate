const mysql = require('mysql2/promise')
const creds = require('../../mysql')

module.exports = async function del (req, res) {
  const { id } = req.params
  const connection = await mysql.createConnection(creds)
  const [rows] = await connection.execute('DELETE FROM `queue` WHERE `id` = ?', [id])
  res.send(rows)
}
