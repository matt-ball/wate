const knex = require('../../db/')

module.exports = async function restaurants (req, res) {
  const { id } = req.params
  const restaurant = await knex()
    .select()
    .from('restaurants')
    .where({ id })

  if (restaurant) {
    res.send(restaurant)
  } else {
    res.send({
      status: '404',
      message: `Restaurant of ID: ${id} not found`
    })
  }
}
