
module.exports = function(req, res) {
    res.render('login', { title: 'login' , session: req.session });
//        res.end();
}