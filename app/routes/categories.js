var catController, colController;

catController = require('../controllers/categories');

colController = require('../controllers/collections');

module.exports = function(router) {
  router.param('id', catController.load);

  /*
   *  List Categories
   */
  router.route('/').get(catController.index).post(catController["new"]);

  /*
   *  Get Category
   */
  router.route('/:id').get(catController.show).put(catController.update)["delete"](catController["delete"]);

  /*
   *  Create new collection
   */
  return router.route('/:id/collections').post(colController["new"]);
};
