module.exports = function(req, res) {
        app.locals.Auth.logout(req, res, function(req,res){res.redirect('back')})
    }
