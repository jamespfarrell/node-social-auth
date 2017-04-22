'use strict';
const h = require('../helpers');
const passport = require('passport');
const config = require('../config');

module.exports = () => {
	let routes = {
		'get': {
			'/': (req, res, next) => {
				res.render('login', {
                    siteName: config.siteName
				});
			},
            '/home': [h.isAuthenticated, (req, res, next) => {
                res.render('home', {
                    siteName: config.siteName,
                    user: req.user,
                    host: config.host
                });
            }],
			'/auth/facebook': passport.authenticate('facebook'),
			'/auth/facebook/callback': passport.authenticate('facebook', {
				successRedirect: '/home',
				failureRedirect: '/'
			}),
			'/auth/twitter': passport.authenticate('twitter'),
			'/auth/twitter/callback': passport.authenticate('twitter', {
				successRedirect: '/home',
				failureRedirect: '/'
			}),
			'/logout': (req, res, next) => {
				req.logout();
				res.redirect('/');
			}
		},
		'post': {

		},
		'NA': (req, res, next) => {
			res.status(404).sendFile(process.cwd() + '/views/404.htm');
		}
	}

	
	return h.route(routes);
}