module.exports = function(req, res) {
    var Auth = app.locals.Auth,
//        ccoll = app.locals.dbstore.collection('cdata');
        ucoll = app.locals.dbstore.collection('udata');
    ccoll = app.locals.dbstore.collection('cdata');
//    var data = {
//        "username":$('#login').val(),
//        "password": $('#pass').val(),
//        "role": $('#role').val(),
//        "new": $('#new').val(),
//        "name":$('#name').val(),
//        "secondName":$('#secondName').val(),
//        "surname":$('#surname').val()
////            "upr":''
//    }
//    res.render('register', { title: 'Express' });

    //validate fields{
    // send error if not valid
    // }
//    var error = {};
//    var XRegExp = require('xregexp').XRegExp;
//    var v = {};
//    var list = {
//        "username":'^\\p{L}+$',
//        "password": '',
//        "role": '',
//        "new": 'new',
//        "name":'^\\p{L}+$',
//        "secondName":'^\\p{L}+$',
//        "surname":'^\\p{L}+$'
//
//    }
//
//    v.name = new XRegExp('');

Auth.getAccount(req,function (err,result){

            var cdata = {
//                "id": new require('mongodb').ObjectID(result._id),
//                "upr": req.body.upr,
//                "password":req.body.password,
//                "name":req.body.name,
                "channels":req.body.channels,
//                "purp":req.body.purp,
//                "prov":req.body.prov,
//                "ctype":req.body.ctype,
//                "dspd":req.body.dspd,
//                "uspd":req.body.uspd,
//                "cq":req.body.cq,
                "MFU_color":req.body.MFU_color,
                "MFU_bw":req.body.MFU_bw,
                "Copier_color":req.body.Copier_color,
                "Copier_bw":req.body.Copier_bw,
                "Scanner_color":req.body.Scanner_color,
                "Scanner_bw":req.body.Scanner_bw,
                "Printer_color":req.body.Printer_color,
                "Printer_bw":req.body.Printer_bw
            }

            ccoll.update( {"_id": result._id}, {$set:cdata},{upsert:true,safe:false},function (err,result) {
                if (err) {
                    console.log(err);
                    res.json(400, err)
                } else {
                    res.json({success:'success'})
                }
                //send "success on success
            });

});
        //write to udata{
            //send 200}}

}
