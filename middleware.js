// Middleware to require login
module.exports.isLoggedIn = (req, res, next) => {
    //console.log("REQ.USER...", req.user); // passport will desrialize the user and put on request data
    // isAuthenticated is a method from passport
    if(!req.isAuthenticated()) {
        req.flash('error', 'You nust be signed in first!')
        res.redirect('/login');
    }
    next();
}


