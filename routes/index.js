
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

/*
 * POST upload a file.
 */

exports.upload = function(req, res){
    if (req.method.toLowerCase() == "get")
    res.render('upload_form', { title: 'upload' , method: req.method });
};

