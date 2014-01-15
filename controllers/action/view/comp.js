
module.exports = function(req, res) {
    var coll = app.locals.dbstore.collection('data');
    var comp = "";
    if ("post" == req.method) {
    var comp = coll.findOne(req.body.id);
    }
    console.log('list : ' + list);
//    console.log(coll.find().toArray());
    var list = coll.find(function (err, cursor){
        cursor.toArray(function (err, docs){
            console.log('docs: %j', docs);
//            console.log (docs[0].Hardware['Board ser_N']);
            res.render('comp', { title: 'comp' , comp:comp , list:docs});
        });
//        console.log (docs.length);
//        res.render('comp', { title: 'comp' , comp:comp , list:docs});
    });


//        res.end();
}