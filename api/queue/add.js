const mysql = require('mysql2/promise')
const creds = require('../../mysql')

module.exports = async function add (req, res) {
  const { id, name } = req.body
  const connection = await mysql.createConnection(creds)
  const [rows] = await connection.execute('INSERT INTO `queue` (restaurant, name) VALUES (?, ?)', [id, name])
  res.send(rows)
}
