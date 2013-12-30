module.exports = function(req, res) {
        res.render('add', { title: 'add' , method: req.method });
//        res.end();
    }