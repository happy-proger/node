module.exports = function (req,res,next) {
    console.log('ensureAuthenticated: ');
    var Auth=app.locals.Auth;
    Auth.checkLogin(req, res, function (err){
        if (err != null){
            console.log(err);
            res.redirect('/');
        } else{
            next();
        }
    });

    };