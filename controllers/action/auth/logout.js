module.exports = function(req, res) {
    console.log('logout start')
    app.locals.Auth.logout(req, res)
    res.redirect('/');

}
