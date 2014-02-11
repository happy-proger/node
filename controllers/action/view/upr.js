module.exports = function(req, res) {
    var ccoll = app.locals.dbstore.collection('cdata');
    var Auth = app.locals.Auth;
//    app.locals.Auth.register
//    coll.find()

    //send current values to .jade
    //get username
    Auth.getAccount(req, function (err,result){
        if (err){
            console.log(err);
        } else {
            console.log(result);

        }
        ccoll.findOne({_id:result._id}, function(err,data){
            var json = {
                "name":"",
                "desc":"",
                "purp":"",
                "prov":"",
                "ctype":"",
                "dspd":"",
                "uspd":"",
                "cq":"",
                "MFU_color":"",
                "MFU_bw":"",
                "Copier_color":"",
                "Copier_bw":"",
                "Scanner_color":"",
                "Scanner_bw":""
            };
            if (data === null){

            } else {
                json = data
            }

            console.log(data);

            res.render('upr', { title: 'upr', json:json});
        })
    })


//get Account
//send json

}
