module.exports = function(req, res) {
        console.log('req.session:' + req.session);
        res.render('upload_form', { title: 'upload' , user: req.session });
        res.end();
    }