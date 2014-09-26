###
#  Category Class
###

class Database

  nextId: 1
  data: {}

  contructor: ->

  add: (object)->
    console.log @nextId
    object.id = @nextId++
    @data[object.id] = object

  find: (id)->
    @data[id]

  toArray: ->
    data = []
    for key,value of @data
      data.push value
    data


###
#  Article Model
###

db = new Database
db.add {
  title: 'Front End Web'
  articles: []
}
db.add {
  title: 'Back End Web'
  articles: []
}

module.exports = db
