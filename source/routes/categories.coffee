#
# Categories Route
#

catController = require '../controllers/categories'
colController = require '../controllers/collections'

module.exports = (router)->

  # Remember: Route is mounted at /categories

  router.param 'id', catController.load

  ###
  #  List Categories
  ###
  router.route('/')
  .get catController.index
  .post catController.new


  ###
  #  Get Category
  ###
  router.route '/:id'
  .get catController.show
  .put catController.update
  .delete catController.delete


  ###
  #  Create new collection
  ###
  router.route '/:id/collections'
  .post colController.new
