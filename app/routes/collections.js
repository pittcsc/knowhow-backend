var controller;

controller = require('../controllers/collections');

module.exports = function(router) {
  router.param('id', controller.load);

  /*
   *  List Categories
   */
  router.route('/').get(controller.index).post(controller["new"]);

  /*
   *  Get Category
   */
  return router.route('/:id').get(controller.show).put(controller.update)["delete"](controller["delete"]);
};
