module.exports = function (app, ControllerTree) {
//   var expressive = require('expressive-routes');
//   var action = require(controllersDir + '/action');
//   var admin = require(controllersDir + '/admin');
//   var init = require(controllersDir + '/init');
//   var helper = require(controllersDir + '/helper');
//   var session = init.session;
//   var test = require(controllersDir + '/test')
//   var = require(controllersDir + '/');
//   var = require(controllersDir + '/');
  var expressive = require('expressive-routes');

  var action = ControllerTree.action;
  var admin = ControllerTree.admin;
  var init = ControllerTree.init;
  var helper = ControllerTree.helper;
  var session = init.session;
  var test = ControllerTree.test;
  test('1');
  var triggers = {
  '!': helper.ensureAuthenticated,
  '$': helper.ensureAdministrator
};
// var routes = {
//   '/': {get: Main.index},
//   '/login': {
//     post: Session.performLogin,
//     get: Session.login
//   },
//   '/logout': {get: Session.logout},
//   '/$admin': {
//     get: Admin.index,
//     '/users' : {
//       get: Admin.users,
//       '/:user_id': {
//         get: Admin.userDetails,
//         '/destroy' : {post: [Admin.contrivedMethod, Admin.destroyUser]},
//         '/update' : {post: Admin.updateUser}
//       }
//     }
//   },
//   '/!account': {
//     get: Account.index,
//     post: Account.updateProfile
//   }
// };
    var routes = {
  '/': {get: function(req,res,next){res.render('index');}},
  '/login': {
    post: ControllerTree.test,
    get: ControllerTree.test
  },
  '/!$logout': {get: [ControllerTree.session.check,ControllerTree.session.logout]}
//   '/!logout': {get: [ControllerTree.session.check,ControllerTree.session.logout]}
//   '/$admin': {
//     get: test('Admin.index'),
//     '/users' : {
//       get: test('Admin.users'),
//       '/:user_id': {
//         get: test('Admin.userDetails'),
//         '/destroy' : {post: [test('Admin.contrivedMethod'), test('Admin.destroyUser')]},
//         '/update' : {post: test('Admin.updateUser')}
//       }
//     }
//   },
//   '/!account': {
//     get: test('Account.index'),
//     post: test('Account.updateProfile')
//   }
};
var opts = {
  triggerMap: triggers,
  verbose: true
};

expressive(routes, app, opts);

}