const mysql = require('mysql2/promise')
const creds = require('../../mysql')

module.exports = async function queue (req, res) {
  const { id } = req.params
  const connection = await mysql.createConnection(creds)
  const [person] = await connection.execute('SELECT * FROM `queue` WHERE `id` = ?', [id])
  const restaurant = person[0].restaurant
  const [rows] = await connection.execute('SELECT * FROM `queue` WHERE `restaurant` = ?', [restaurant])
  const queue = rows.map(addPosition)
  const result = queue.find((q) => q.id === Number(id))

  res.send(result)
}

function addPosition (person, i) {
  return Object.assign(person, {
    position: i + 1
  })
}