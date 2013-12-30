module.exports = function(req, res) {
        Auth.login(req, res, function(req,res){res.redirect('back')})
    }
