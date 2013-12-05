module.exports = {
    priority: 1000, //this is the `/` handler, should it should be the last route.
    path: '/upload',

    //this function gets passed the express object one time for any extra setup
    init: function(app) { 
        
    },

    GET: function(req, res) {
        res.render('upload_form', { title: 'upload' , method: req.method });
    },

    POST: function(req, res) {
        var fs = require('fs');
        var path = require('path');

        fs.rename(req.files.displayImage.path , "." + path.sep + "public" + path.sep + "uploads" + path.sep + req.files.displayImage.name, function (err) {
                if(err) {
                    console.log(err);
                } else {
                    console.log("The file was saved!");
                    res.redirect("back");
                }
            }
        );
    }
};
