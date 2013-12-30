
module.exports = function(req, res) {
    var coll = app.locals.dbstore.collection('data');
    coll.findOne(req.body.id);
    res.render('comp', { title: 'comp' , method: req.method });

//        res.end();
}