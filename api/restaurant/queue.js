const mysql = require('mysql2/promise')
const creds = require('../../mysql')

module.exports = async function restaurantQueue (req, res) {
  const { id } = req.params
  const connection = await mysql.createConnection(creds)
  const [rows] = await connection.execute('SELECT * FROM `queue` WHERE `restaurant` = ?', [id])
  const queue = rows.map(addPosition)
  
  res.send(queue)
}

function addPosition (person, i) {
  return Object.assign(person, {
    position: i + 1
  })
}