module.exports = function (req,res,next) {
    console.log('ensureAuthenticated: ');
    next();
    };