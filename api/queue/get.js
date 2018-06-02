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
      .select('queue.id as qId', 'restaurants.id as rId', 'queue.name as name', 'restaurants.name as restaurant')
      .from('queue')
      .leftJoin('restaurants', 'queue.restaurant', 'restaurants.id')
      .where('restaurants.id', restaurant.restaurant)

    const queue = rows.map(addPosition)
    const result = queue.find((q) => q.qId === Number(id))

    res.send(result)
  } else {
    res.send({
      status: '404',
      message: `User of ID: ${id} not found`
    })
  }
}
