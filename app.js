
/**
 * Module dependencies.
 */

var express = require('express');
var  rr = require('recursive-require');
var http = require('http');
var path = require('path');
var MongoStore = require('connect-mongo')(express);
var app = express();

app.use(express.bodyParser({uploadDir:'./public/uploads'}));
app.use(express.cookieParser('your secret here'));
app.use(express.session({
    secret  : 'watata',
    cookie  : {
        maxAge  : 1200000              // expire the session(-cookie) after 10 seconds
    },
    store   : new MongoStore({
        db: 'sessionstore',
        auto_reconnect: true
        // see https://github.com/kcbanner/connect-mongo#options for more options
    })
}));
app.use(app.router);
//console.log(app.routes);
var ControllerTree = rr(__dirname + '/controllers');
ControllerTree.init.router(app, ControllerTree);
//app.use(function(req, res, next) {
//    req.app = app;
//    next();
//});
global.app = app;
global.ini_db_mapper = function (input,reverse){
    var Map = {
        'CPU.CPUID' : 'CPU_CPUID',
        'CPU.BrandName' : 'CPU_BrandName',
        'Board ser.N' : 'Board ser_N',
        'Chassis ser.N' : 'Chassis ser_N',
        'CPU1 ser.N' : 'CPU1 ser_N',
        'CPU2 ser.N' : 'CPU2 ser_N',
        'MEM1 Ser.N' : 'MEM1 Ser_N',
        'MEM2 Ser.N' : 'MEM2 Ser_N',
        'MEM3 Ser.N' : 'MEM3 Ser_N',
        'MEM4 Ser.N' : 'MEM4 Ser_N',
        'System ser.N': 'System ser_N',
        'S.M.A.R.T': 'S_M_A_R_T'
    }
    var invert = function (obj) {

        var new_obj = {};

        for (var prop in obj) {
            if(obj.hasOwnProperty(prop)) {
                new_obj[obj[prop]] = prop;
            }
        }

        return new_obj;
    };
    if (reverse) {
        invert(Map);
    }
    if(typeof(input)=="undefined"){return false;};
    if(typeof(input)=="object")
    {
//        console.log(typeof(input));
//        console.log(Object.keys(input));
        for (var k in input){
            for(var key in Map)
            {
                var kk = key ;
//                console.log (k + ': ' + input[k]);
                if (input[k].hasOwnProperty(kk)){
//                    console.log(input[k][kk]);
                    input[k][Map[kk]] = input[k][kk];
                    delete input[k][kk];
                }
            }

        };
        return input;
    }
}
app.set('port', 3000 )
// || process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

// app.use(express.session());

app.use(express.static(path.join(__dirname, 'public')));
// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
    app.set('db-uri', 'mongodb://localhost/node-dev');
//   app.set('db-uri-auth', 'mongodb://localhost/node-dev-auth');
}

ControllerTree.init.db(app.get('db-uri'));
console.log(process.versions);
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
    console.log(process.memoryUsage());
//   console.log(app.routes);
    ControllerTree.init.auth(app);
//   console.log(app.routes.get[2]);
//   console.log(ControllerTree.treetest.test);
//   console.log(app.address + app.get('port') );
// TODO: Add global domain variable
});

