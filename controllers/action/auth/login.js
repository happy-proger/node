module.exports = function(req, res) {
        app.locals.Auth.login(req, res, function(){res.redirect('back')})
    }
