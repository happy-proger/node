module.exports = function(req, res) {
        Auth.logout(req, res, function(req,res){res.redirect('back')})
    }
