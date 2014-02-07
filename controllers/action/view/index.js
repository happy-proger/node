module.exports = function(req, res) {
//     TODO: set user type from req.session (admin, upr, user)
//    var menu = {
//        Login: '/login',
//        Upload: '/upload',
//        "admin:Add":'/add',
//        "user:edit":'/user',
//        "upr:edit":'/upr',
//        "Logout":'/logout',
//        "register":'/register',
//        "test":'/test'
//    }
    var menu = app.locals.menu;
    var mout = [];
    var role = 'anonymous';
    app.locals.Auth.getAccount(req, function (err,result){
        if (err) console.log (err);
        if (result){
            role = result.role;
        }
        for (var i = 0; i < menu.length; i++) {
            var visible = false;
            for (var j=0 ; j<menu[i].visibility.length; j++){
//                console.log (role + )
                if (role == menu[i].visibility[j]){

                    visible = true;
                }
            }
            if (visible) {
                mout.push(menu[i]);
            }
        }
        console.log(mout);
//        mout =
        res.render('index', { title: 'index' , menu:mout});

    });

//        res.end();
//        console.log(err);
}