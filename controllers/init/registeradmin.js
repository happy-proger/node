module.exports = function (req,res) {
    var Auth = app.locals.Auth;
    console.log ('Auth: '+ Auth);
//    console.log (app);
    Auth.register(req);//(req.body.username, req.body.password)
    // if (!(Auth.getAccount('admin','admin'))) {Auth.createAccount('admin','admin');}
    // Auth.createAccount('admin','admin');
    console.log('admin registered');
    // console.log(Auth.getAccount('admin'));
    if (res.redirect){
    res.redirect('back');} else {res.end();}
    };