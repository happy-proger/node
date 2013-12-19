module.exports = function (routesDir) {
    require('fs').readdirSync(__dirname + require('path').sep).forEach(function(file) {
        if (file.match(/.+\.js/g) !== null && file !== 'index.js') {
            var name = file.replace('.js', '');
            exports[name] = require('./' + file);
        }
    });
}