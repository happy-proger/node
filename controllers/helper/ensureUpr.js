    module.exports = function (req,res,next) {
        console.log('ensureAdministrator: ');
        var Auth=app.locals.Auth;
        if ("upr" == Auth.getUsername(req).role)
        {
            next();
        } else {
            res.redirect('index');
        };

    };
