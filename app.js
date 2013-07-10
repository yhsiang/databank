
/**
 * Module dependencies.
 */

var express = require('express')
  , i18n = require('i18next')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var mongoose = require('mongoose');
mongoose.connect('MONGODB URL');
var db = mongoose.connection;
db.on ('error', console.error.bind(console, 'connection error:'));

i18n.init({
	lng: "zh-TW",
	ignoreRoutes: ['/stylesheets', 'javascripts'],
	saveMissing: true,
	debug: true
});

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(i18n.handle);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

i18n.registerAppHelper(app);

app.get('/', routes.index);
app.get('/:action', routes.action);
app.post('/:action/create', routes.create);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
