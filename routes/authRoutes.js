const passport = require('passport');

module.exports = (app) => {
    // Ask user if they grant permission through Google
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    // Ask google for details about User using 'code' from callback
    app.get(
        '/auth/google/callback', 
        passport.authenticate('google')
    );

    // Log user out
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    // Test authentication by sending back user data
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};
