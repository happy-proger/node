module.exports = function(req, res) {
    var Auth = app.locals.Auth,
//        ccoll = app.locals.dbstore.collection('cdata');
        ucoll = app.locals.dbstore.collection('udata');
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



            var udata = {
                "id": new require('mongodb').ObjectID(result._id),
                "password":req.body.password,
                "role": req.body.role,
                "new": req.body.new,
                "name":req.body.name,
                "secondName":req.body.secondName,
                "surname":req.body.surname
            }

            ucoll.save(udata, function (err,result) {
                if (err) {
                    console.log(err);
                    res.json(400, err)
                } else {
                    res.json({success:'success'})
                }
                //send "success on success
            });


        //write to udata{
            //send 200}}

}
