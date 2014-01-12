// app.js

/**
 * Module dependencies
 */

var express = require('express'),
  api = require('./routes/api'),
  http = require('http'),
  path = require('path');

var app = module.exports = express();

/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3011);
app.set('views', __dirname + '/views');
/*
app.set('view engine', 'jade');
*/
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// development only
if (app.get('env') === 'development') {
  app.use(express.errorHandler());
}

// production only
if (app.get('env') === 'production') {
  // TODO
};


/**
 * Routes
 */

// JSON API

app.post('/api', api.hi);
/*
app.post('/api/posts', api.addPost);
*/

/** Start Server */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
