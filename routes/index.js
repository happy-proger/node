
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', { title: 'Express' });
};

/*
 * POST upload a file.
 */

//exports.upload = function(req, res){
//    if (req.method.toLowerCase() == "get")
//    {
//        res.render('upload_form', { title: 'upload' , method: req.method });
//    } else if (req.method.toLowerCase() == "post"){
//        var fs = require('fs');
//        var sys = require('sys');
//        var path = require('path');
//
//        fs.rename(req.files.displayImage.path , "." + path.sep + "public" + path.sep + "uploads" + path.sep + req.files.displayImage.name, function (err) {
//                if(err) {
//                    console.log(err);
//                } else {
//                    console.log("The file was saved!");
//                    res.redirect("back");
//                }
//            }
//        );
//    }
//};
require('fs').readdirSync(__dirname + require('path').sep).forEach(function (file) {
    if (file.match(/.+\.js/g) !== null && file !== 'index.js') {
        var name = file.replace('.js', '');
        exports[name] = require('./' + file)[name];
    }
});

