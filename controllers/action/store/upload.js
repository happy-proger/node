module.exports = function(req, res) {
        var fs = require('fs');
        var path = require('path');
        var ini = require('ini');
        var iconv = require('iconv-lite');
        var readFileSync_encoding = function (filename, encoding) {
            var content = fs.readFileSync(filename);
            var buffer = iconv.decode(content,'win1251');
            return buffer.toString('utf8');
        }
        
        
        console.log(path.extname);
        if ("ini" != path.extname) {
            var File = ini.parse(readFileSync_encoding(req.files.displayImage.path , 'windows-1251'))
            // console.log(File);
        }
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