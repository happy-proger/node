    module.exports = function (req,res,next) {
        console.log('ensureAdministrator: ');
        if ("admin" == Auth.getUsername(req))
        {
            next();
        } else {
            res.redirect('Admin_required');
        };

    };
