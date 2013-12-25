module.exports = function (db_uri) {
    var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

  MongoClient.connect(db_uri, function(err, db) {
    if(err) throw err;

    var collection = db.collection('test_insert');
    // collection.insert({b:2}, function(err, docs) {

    //   collection.count(function(err, count) {
    //     console.log(format("count = %s", count));
    //   });

    //   // Locate all the entries using find
    //   collection.find().toArray(function(err, results) {
    //     console.dir(results);
    //     // Let's close the db
    //     db.close();
    //   });
    // });
  })
    };