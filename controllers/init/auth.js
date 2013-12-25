module.exports = function (app) {
    var Auth = require('mongo-express-auth');
Auth.init({
    mongo: { 
        dbName: 'myApp',
        collectionName: 'accounts'
    }
}, function(){
    console.log('mongo auth ready!');
    // app.listen(3000);
});
    // if (!(Auth.getAccount('admin','admin'))) {Auth.createAccount('admin','admin');}
    // Auth.createAccount('admin','admin');
    console.log('auth init');
    // console.log(Auth.getAccount('admin'));
    // app.set('Auth', Auth);
    };