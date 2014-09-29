module.exports = function(app, express) {

  /*
   *  Middleware
   */
  var allRouter, categoriesRouter, collectionsRouter;
  allRouter = express.Router();
  allRouter.use(function(req, res, next) {
    res.set({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      'Content-Type': 'application/vnd.api+json'
    });
    return next();
  });
  app.use('/', allRouter);

  /*
   *  Categories Route
   */
  categoriesRouter = express.Router();
  require('../routes/categories')(categoriesRouter);
  app.use('/categories', categoriesRouter);

  /*
   *  Collections Route
   */
  collectionsRouter = express.Router();
  require('../routes/collections')(collectionsRouter);
  app.use('/collections', collectionsRouter);

  /*
   *  Handle Errors
   */
  return app.use(function(err, req, res, next) {
    if (err.message = 'not found') {
      console.log("ERROR:");
      console.log("\t" + err.message);
      console.log("\t" + err.stack);
      res.status(404).end();
    } else if (err.name === 'ValidationError') {
      res.status(400).end();
    } else {
      console.error(err.stack);
    }
    return next();
  });
};
