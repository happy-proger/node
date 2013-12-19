module.exports = function (req,res,next) {
    console.log('logout1');
    // res.render('index', { title: 'Express' });
    res.redirect('back');
    console.log('logout2');
    // next();
    console.log('logout3');
    // return true;
    };