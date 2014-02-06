    module.exports = function (req,res,next) {
        console.log('ensureAdministrator: ');
        var Auth=app.locals.Auth;
        Auth.getAccount(req, function (err , result) {
            console.log ('err: %j', err);
            console.log ('result: %j' ,result);
            if (err)
                res.redirect(401, '/');
            else if (result.hasOwnProperty('role') && "admin" == result.role)
            {
                next();
            } else {
                res.redirect('/');
            };
        } );


    };
