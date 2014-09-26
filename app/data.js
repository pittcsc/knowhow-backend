
/*
 *  Category Class
 */
var Database, db;

Database = (function() {
  function Database() {}

  Database.prototype.nextId = 1;

  Database.prototype.data = {};

  Database.prototype.contructor = function() {};

  Database.prototype.add = function(object) {
    console.log(this.nextId);
    object.id = this.nextId++;
    return this.data[object.id] = object;
  };

  Database.prototype.find = function(id) {
    return this.data[id];
  };

  Database.prototype.toArray = function() {
    var data, key, value, _ref;
    data = [];
    _ref = this.data;
    for (key in _ref) {
      value = _ref[key];
      data.push(value);
    }
    return data;
  };

  return Database;

})();


/*
 *  Article Model
 */

db = new Database;

db.add({
  title: 'Front End Web',
  articles: []
});

db.add({
  title: 'Back End Web',
  articles: []
});

module.exports = db;
