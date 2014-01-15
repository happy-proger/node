module.exports = function(req, res) {
    if (req.body.hasOwnProperty("new")){
        //add new user
        console.log('new');
        var Auth = app.locals.Auth;

        Auth.register(req, function (err){
//            res.json(200, JSON.stringify({"new":"new"}));

            console.log('ended registration');
            if (err){
                console.log('err: %j' , err);
////                res.render('index');
                res.json(200, {"err":err});
            }else{
                console.log('successfully registered');
                res.json(200,{"success":'success'});
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
        "Logout":'/logout'
    }
    var roles = {
        admin: {
            fields : {
                username : {
                    type:'text',
                    length: 40
//                        ,validator:
                },
                pass : {
                    type:'password',
                    length: 40
//                        ,validator:
                }
            }
        },
        upr: {
            fields : {
                name : {
                    type:'text',
                    length: 40
//                        ,validator:
                },
                pass : {
                    type:'password',
                    length: 40
//                        ,validator:
                }
            }
        },
        user: {
            fields : {
                name : {
                    type:'text',
                    length: 40
//                        ,validator:
                },
                surname: {
                    type:'text',
                    length: 40
//                        ,validator:
                },
                pass : {
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