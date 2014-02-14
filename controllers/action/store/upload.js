module.exports = function(req, res) {
    var fs = require('fs');
    var path = require('path');
    var ini = require('ini');
    var iconv = require('iconv-lite');
    var db = app.locals.dbstore
    var collection = db.collection('data');
    var readFileSync_encoding = function (filename, encoding) {
        var content = fs.readFileSync(filename);
        var buffer = iconv.decode(content,'win1251');
        return buffer.toString('utf8');
    }
    var readFile_encoding = function (filename, encoding) {
        var content = fs.readFile(filename, function (content) {var buffer = iconv.decode(content,'win1251');
            return buffer.toString('utf8');});

    }
    var i = 1;
    console.log(i++);
//    console.log(path.extname);
//        if ("ini" != path.extname) {
    var File = ini.parse(readFileSync_encoding(req.files[0].path , 'windows-1251'))

//        }
    console.log('File: ');
//    console.log(File);
//    console.log(i++);
    var MappedFile = req.app.locals.ini_db_mapper(File);
    if (MappedFile.hasOwnProperty('Info')){


        var Auth = app.locals.Auth;
        Auth.getAccount(req, function (err, result){
            if (err){
                console.log(err)
            } else {
                MappedFile.Info['User_id'] = result._id;
                MappedFile._id = result._id;
                delete MappedFile['Config_changes'];
                console.log('MappedFile: ');
//    var MappedFile = File;

    console.log(MappedFile);
                console.log(i++);
                collection.update( {"_id": result._id}, MappedFile,{upsert:true,safe:false}, function(err){
                    if ( err && err.code !== 11000 ) {
                        console.log(err);
                        console.log(err.code);
                        res.redirect('back');
//                        res.end();
//            res.send('Another error showed up');
//            return;
                    } else if ( err && err.code === 11000 ) {
                        console.log('error: Comp already exists');
                        res.redirect('/');
//                        res.end();
//            return;
                    } else {
                        res.json({success:'success'});
//                        res.end();
                    }


                })
                console.log(i++);
                fs.unlink(req.files[0].path);
            }
        });
    } else {
        res.json(400, {err:'wrong file'})
    }

}