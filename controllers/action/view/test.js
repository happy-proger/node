/**
 * Created by Admin on 16.01.14.
 */
module.exports = function(req, res) {
    var json= {}
    var Auth = app.locals.Auth;
    var coll = app.locals.dbstore.collection('data');
    var ucoll = app.locals.dbstore.collection('udata');
//    Auth.listUsers({}, function (err, result) {
//        console.log('err: %j\nresult: %j' ,err,result)
//        if (err) {
//            json = err
//        } else {
//            result.toArray(function (err, a){
//                console.log(a)
//                json['item'] = '';
//
//                for (index = 0; index < a.length; ++index) {
//                    console.log(a[index]);
//
//                    json[a[index]._id]=a[index];
////                    console.log(entry);
//                }
//                console.log('str: %j' ,JSON.stringify(json));
//                res.render('test', { json: JSON.stringify(json) });
////                res.end();
//            })
//        }
//
//    })
//    var json = Auth.getUserById(require('mongodb').ObjectID('52d68ea5651e90f003050e46'), function (err, result) {
//        console.log('err: %j\nresult: %j' ,err,result)
//        if (err) {
//            json = err
//        } else {
//            json = result
//                console.log('str: %j' ,JSON.stringify(json));
//                res.render('test', { json: JSON.stringify(json) });
////                res.end();
//
//        }})

//    res.render('test', { json: JSON.stringify(json) });
//    app.locals.Auth.register
//    coll.find();
    var result = [{res:'res'}];
    var or = [ { a: '_a_' },
//        { _id: new require('mongodb').ObjectID('52f1e94a799b59700a19308c') },
//        { _id: new require('mongodb').ObjectID('52f1e953799b59700a19308d') },
        { _id: new require('mongodb').ObjectID('52f1fc07243e7fcc1d51a418') } ]
//    var or = [ { a: '_a_' },
//
//        { _id: new require('mongodb').ObjectID('52f0f4d45e2c1e6c0f539d2d') } ];
    ucoll.find({$or: or}, function (err, cursor){
        if (err) console.log(err);
        cursor.toArray(function (err, array){
            result.push.apply(result, array);
            console.log(result);
            var json = result
//            res.render('register', { title: 'Express', list : result});
            res.render('test', { json: JSON.stringify(json) });
        })
    });

}