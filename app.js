
/**
 * Module dependencies.
 */

var express = require('express');
// var routes = require('./routes');
var DynamicRoutes = require('dynamic-routes');
// var user = require('./routes/user');
var http = require('http');
var path = require('path');
var MongoStore  = require('connect-mongo')(express);
var app = express();

// all environments
app.use(express.bodyParser({uploadDir:'./public/uploads'}));
app.set('port', 3000 || process.env.PORT || 3000);
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
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  app.set('db-uri', 'mongodb://localhost/node-dev');
}
DynamicRoutes(app, __dirname + '/routes/');
console.log(process.versions);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
//   console.log(app.routes);
});
