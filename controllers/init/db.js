module.exports = function (db_uri) {
    var MongoClient = require('mongodb').MongoClient
        , format = require('util').format;

    MongoClient.connect(db_uri, function(err, db) {
        if(err) throw err;
//        var collection =
        var collection = db.collection('data');
        var indexes = { "Info.MAC_Addr": 1 , "IP_Addr"  : 1};
        collection.ensureIndex( indexes, { unique: true } , function(){
            if (err) {collection.createIndex(indexes, { unique: true } )}
        });
        app.locals.dbstore = db;
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
