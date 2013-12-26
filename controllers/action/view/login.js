
module.exports = function(req, res) {
        res.render('login', { title: 'login' , method: req.method });
        res.end();
    }