#
# Categories Route
#

controller = require '../controllers/categories'

module.exports = (router)->

  # Remember: Route is mounted at /categories

  router.param 'id', controller.load

  ###
  #  List Categories
  ###
  router.route('/')
  .get controller.index
  .post controller.new


  ###
  #  Get Category
  ###
  router.route '/:id'
  .get controller.show
  .put controller.update
  .delete controller.delete
