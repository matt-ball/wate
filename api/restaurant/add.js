const knex = require('../../db/')

module.exports = async function add (req, res) {
  const { name } = req.body
  const id = await knex()
    .insert({ name })
    .from('restaurants')

  res.send({
    id: id[0]
  })
}
