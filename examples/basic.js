var Storage = require('..'); // NPM: node-document-storage-<ADAPTER_NAME>

var storage = new Storage(); // Connect using defaults (i.e. `localhost`)

var data = {
  keys: ['post/1', 'post/abc'],
  values: [{title: "foo", tags: ['foo', 'bar'], published: true}, {title: "bar", tags: ['baz'], published: false}]
};

var inspect = require('util').inspect;

console.log('STORAGE: `%s`', storage.name);
console.log('\nURL: `%s`', storage.url);

storage.set(data.keys, data.values, function(errors, results) {
  console.log("\nSET  %s  ->  %s", inspect(data), inspect(results));

  storage.get(['post/1', 'post/abc'], function(errors, results) {
    console.log("\nGET  %s  ->  %s", data.keys, inspect(results));

    storage.del(['post/1', 'post/abc'], function(errors, results) {
      console.log("\nDEL  %s  ->  %s", data.keys, inspect(results));

      storage.get(['post/1', 'post/abc'], function(errors, results) {
        console.log("\nGET  %s  ->  %s", data.keys, inspect(results));

        process.exit();
      });
    });
  });
});
