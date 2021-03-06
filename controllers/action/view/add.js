module.exports = function(req, res) {
    var ucoll = app.locals.dbstore.collection('udata')
    if (req.body.hasOwnProperty("new")){
        //add new user
        console.log('new');
        var Auth = app.locals.Auth;

        Auth.register(req, function (err,result){
//            res.json(200, JSON.stringify({"new":"new"}));

            console.log('ended registration');
            console.log('account: %j', result);
            if (err){
                console.log('err: %j' , err);
////                res.render('index');
                res.json(200, {"err":err});
            }else{
                var udata = {

                    "_id": result[0]._id,
                    "password":req.body.password,
                    "role": req.body.role,
//                    "new": req.body.new,
                    "name":req.body.name,
                    "secondName":req.body.secondName,
                    "surname":req.body.surname
                }
                if (err) {
                    console.log(err);
                    res.json(400, err)
                } else {

                    ucoll.save(udata, function (err,result) {
                        if (err) {
                            console.log(err);
                            res.json(400, err)
                        } else {
                            res.json({success:'success'})
                        }
                        //send "success on success
                    });
                }
//                console.log('successfully registered');
//                res.json(200,{"success":'success'});
            }
//            console.log('res.end');
//            res.end();
//            console.log('return');
//
        });


    } else {
    var menu = {
        Login: '/login',
        Upload: '/upload',
        "admin:Add":'/add',
        "user:edit":'/user',
        "upr:edit":'/upr',
        "Logout":'/logout',
        "register":'/register',
        "test":'/test'
    }
    var roles = {
        admin: {
            fields : {
                username : {
                    label: 'Логин',
                    name : 'username',
                    type:'text',
                    length: 40
//                        ,validator:
                },
                pass : {
                    label: 'Пароль',
                    type:'password',
                    length: 40
//                        ,validator:
                }
            }
        },
        upr: {
            fields : {
                login : {
                    name : 'username',
                    label: 'Логин',
                    type:'text',
                    length: 40
//                        ,validator:
                },
                name : {
                    name : 'name',
                    label: 'Название',
                    type:'text',
                    length: 40
//                        ,validator:
                },
                pass : {
                    label: 'Пароль',
                    type:'Пароль',
                    length: 40
//                        ,validator:
                }
            }
        },
        user: {
            fields : {
                login : {
                    label: 'Логин',
                    type:'text',
                    length: 40
//                        ,validator:
                },
                name : {
                    label: 'Имя',
                    type:'text',
                    length: 40
//                        ,validator:
                },
                secondName : {
                    label: 'Отчество',
                    type:'text',
                    length: 40
//                        ,validator:
                },
                surname: {
                    label: 'Фамилия',
                    type:'text',
                    length: 40
//                        ,validator:
                },
                pass : {
                    label: 'Пароль',
                    type:'password',
                    length: 40
//                        ,validator:
                }}
        }
    }

    res.render('add', { title: 'add' , req: req ,roles:roles, menu:menu});
//        res.end();
    }
}