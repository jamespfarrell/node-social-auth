'use strict';
const express = require('express');
const app = express();
const myApp = require('./app');
const passport = require('passport');

app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(myApp.session);

//Bring in Passport's middleware function designed to work with Express. Hooks up passport to the request and response streams that Express provides access to
app.use(passport.initialize());

//Hook up Express' session middleware with Passports - so that it can write to and read from session variables - connects serializeUser, deserializeUser to the sessions mechanism in Express
app.use(passport.session());
/*


app.use(require('morgan')('combined', {
	stream: {
		write: message => {
			// Write to logs
			myApp.logger.log('info', message);
		}
	}
}));*/

app.use('/', myApp.router);

myApp.ioServer(app).listen(app.get('port'), () => {
	console.log('Fluent Music Running on Port: ', app.get('port'));
});