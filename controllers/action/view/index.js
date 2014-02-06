module.exports = function(req, res) {
//     TODO: set user type from req.session (admin, upr, user)
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
    res.render('index', { title: 'Express' , menu:menu});
//        res.end();
//        console.log(err);
}