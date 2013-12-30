module.exports = function (req,res,next) {
    console.log('ensureAuthenticated: ');
    Auth.checkLogin(req, res, function (err){
        if (err){
            console.log(err);
            res.redirect('not_logged_in');
        } else{
            next();
        }
    });

    };