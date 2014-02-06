module.exports = function(req, res) {
    var ucoll = app.locals.dbstore.collection('udata');

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

//                        result.push.apply(result, array);
                        console.log(result);
                        res.render('register', { title: 'Express', list : result});

                    })
                });


            })

        }


    });
//    coll.find()

}
//cursor.forEach() -> fill the "or" var with id's var or = [a:a] ; or.push {_is:idN}-> coll.find({$or:or}) -> cursor.toArray(//create the "list" array)