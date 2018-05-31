const connection = require('./connection')

module.exports = function knex () {
  return require('knex')({ client: 'mysql', connection })
}
