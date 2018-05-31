const knex = require('../../db/')

module.exports = async function add (req, res) {
  const { restaurant, name } = req.body
  const id = await knex()
    .insert({ restaurant, name })
    .from('queue')

  if (id) {
    res.send({ id: id[0] })
  }
}
