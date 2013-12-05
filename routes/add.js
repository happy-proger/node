module.exports = {
    priority: 1000, //this is the `/` handler, should it should be the last route.
    path: '/add',

    //this function gets passed the express object one time for any extra setup
    init: function(app) { 
        
    },

    GET: function(req, res) {
        res.render('add', { title: 'add' , method: req.method });
    },

    POST: function(req, res) {
        res.json(req.data);
    }
};
