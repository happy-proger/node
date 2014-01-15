/**
 * Created by Admin on 10.01.14.
 */
module.exports = function(req, res) {
    var coll = app.locals.dbstore.collection('data');
    console.log("FIO: %s " , req.body.FIO);
    coll.findOne({"Info.User_FIO":req.body.FIO}, function (err,rec){
        console.log("rec: %j " , rec)
//        res.json(rec);
        res.set('Content-Type', 'text');
        res.send(JSON.stringify(rec));
    })

}