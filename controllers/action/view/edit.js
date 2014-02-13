module.exports = function(req, res) {
    var ucoll = app.locals.dbstore.collection('udata');
    var Auth = app.locals.Auth;
//    app.locals.Auth.register
//    coll.find()

    //send current values to .jade
    //get username
    console.log('test_edit');
    Auth.getAccount(req, function (err,result){
        if (err){
            console.log(err);
        } else {
            console.log(result);

        }
        ucoll.findOne({_id:result._id}, function(err,acc){
            var json = acc;
            console.log(acc);
            app.locals.Auth.listUsers({role:'upr'}, function (err,cursor){
                var result = [{name:'Выберите управление'}];
                var or = [{a:'_a_'}];
                if (cursor){
                    cursor.toArray(function (err, array){
                        for (var i = 0; i < array.length; i++)  {
                            or.push({_id:array[i]._id});
                        }
                        console.log(or);
                        ucoll.find({$or: or}, function (err, cursor){
//                    console.log(cursor)
                            if (err) console.log(err);
                            cursor.toArray(function (err, array){
                                console.log(array);
                                for (var i = 0; i < array.length; i++)  {
                                    result.push(
                                        { name : array[i].name}
                                    )
                                }
                                res.render('edit', { title: 'edit', json:json, list:result});
                            })})})}})
    })

})
//get Account
//send json

}
