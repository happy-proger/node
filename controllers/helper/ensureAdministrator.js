    module.exports = function (req,res,next) {
        console.log('ensureAdministrator: ');
        var Auth=app.locals.Auth;
        Auth.getAccount(req, function (err , result) {
            console.log ('err: %j', err);
            console.log ('result: %j' ,result);
            if ("admin" == result.role)
            {
                next();
            } else {
                res.redirect('index');
            };
        } );


    };
