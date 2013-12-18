module.exports = {
    priority: 1000, //this is the `/` handler, should it should be the last route.
    path: '/register',

    //this function gets passed the express object one time for any extra setup
    init: function(app) { 
        
    },

    GET: function(req, res) {
        res.render('register_form', { title: 'register' , method: req.method });
    },

    POST: function(req, res) {
        
    }
};
