module.exports = function addPosition (person, i) {
  return Object.assign(person, {
    position: i + 1
  })
}
