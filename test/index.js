
// -----------------------
//  Test
// --------------------

var Storage = require('node-document-storage');

module.exports = Storage.Spec('ElasticSearch', {
  module: require('..'),
  engine: require('elastical'),
  db: 'default-test',
  default_url: 'http://localhost:9200/default-test',
  authorized_url: 'http://vt4t5uu0:pk9q6whooingl4uo@jasmine-4473159.us-east-1.bonsai.io:80/test',
  unauthorized_url: 'http://vt4t5uu0:123@jasmine-4473159.us-east-1.bonsai.io:80/test',
  client: {
    get: function(db, type, id, callback) {
      var client = new (require('elastical')).Client('localhost', {port: 9200});

      client.get(db, id, {type: type}, function(err, res) {
        callback(err, res);
      });
    },

    set: function(db, type, id, data, callback) {
      var client = new (require('elastical')).Client('localhost', {port: 9200});

      client.index(db, type, data, {id: id, create: false}, function(err, res) {
        callback(err, res);
      });
    },

    del: function(db, type, id, callback) {
      var client = new (require('elastical')).Client('localhost', {port: 9200});

      client.delete(db, type, id, {}, function(err, res) {
        callback(err, res);
      });
    },

    exists: function(db, type, id, callback) {
      var client = new (require('elastical')).Client('localhost', {port: 9200});

      // client.count(db, type, {id: id}, function(err, res) {
      //   callback(err, res);
      // });

      client.get(self.options.server.db, resource.id, {type: resource.type, ignoreMissing: true}, function(err, data, res) {
        callback(err, res);
      });
    }
  }
});
