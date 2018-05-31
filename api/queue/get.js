const knex = require('../../db/')
const addPosition = require('../lib/add-position')

module.exports = async function queue (req, res) {
  const { id } = req.params
  const restaurant = await knex()
    .select('restaurant')
    .from('queue')
    .where({ id })
    .first()

  if (restaurant) {
    const rows = await knex()
      .select()
      .from('queue')
      .where({ restaurant: restaurant.restaurant })

    const queue = rows.map(addPosition)
    const result = queue.find((q) => q.id === Number(id))

    res.send(result)
  } else {
    res.send({
      status: '404',
      message: `User of ID: ${id} not found`
    })
  }
}
