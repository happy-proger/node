module.exports = function (req,res,next) {
    console.log('ensureAuthenticated: ');
    var Auth=app.locals.Auth;
    Auth.checkLogin(req, res, function (err){
        if (err){
            console.log(err);
            res.redirect('index');
        } else{
            next();
        }
    });

    };