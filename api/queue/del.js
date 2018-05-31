const knex = require('../../db/')

module.exports = async function del (req, res) {
  const { id } = req.params
  const result = await knex()
    .del()
    .from('queue')
    .where({ id })

  if (result) {
    res.send({
      status: '200',
      message: `User of ID: ${id} deleted`
    })
  } else {
    res.send({
      status: '404',
      message: `User of ID: ${id} not found`
    })
  }
}
