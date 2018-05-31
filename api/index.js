module.exports = {
  queue: {
    get: require('./queue/get'),
    add: require('./queue/add'),
    del: require('./queue/del')  
  },
  restaurant: {
    get: require('./restaurant/get'),
    add: require('./restaurant/add'),
    queue: require('./restaurant/queue')
  }
}
