
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
app.use(app.router); 
console.log(app.routes);
var ControllerTree = rr(__dirname + '/controllers');
ControllerTree.init.router(app, ControllerTree);
app.use(function(req, res, next) {
    req.app = app;
    next();
});
global.app = app;

app.set('port', 3000 )
// || process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
// app.use(express.session());
app.use(express.session({
  secret  : 'watata',
  cookie  : {
    maxAge  : 10000              // expire the session(-cookie) after 10 seconds
  },
  store   : new MongoStore({
    db: 'sessionstore'
    // see https://github.com/kcbanner/connect-mongo#options for more options
  })
}));
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
   console.log(app.routes);
    ControllerTree.init.auth(app);
//   console.log(app.routes.get[2]);
//   console.log(ControllerTree.treetest.test);
//   console.log(app.address + app.get('port') );
// TODO: Add global domain variable
});

