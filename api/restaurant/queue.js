const knex = require('../../db/')
const addPosition = require('../lib/add-position')

module.exports = async function restaurantQueue (req, res) {
  const { id } = req.params
  const queue = await knex()
    .select()
    .from('queue')
    .where('restaurant', id)

  if (queue.length) {
    res.send(queue.map(addPosition))
  } else {
    res.send({
      status: '404',
      message: `Restaurant of ID: ${id} not found`
    })
  }
}
