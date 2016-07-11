//use webpack-dev-server instade

var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
//var chokidar = require('chokidar');
var config = require('./webpack.config');
var app = new (require('express'))();
var port = 3030;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
	lazy: false,
	noInfo: true

}))

app.use(require("webpack-hot-middleware")(compiler));

app.get("/", function(req, res) {
	console.log(__dirname);
	res.sendFile(__dirname + '/index.html')
})


app.listen(port, function(error) {
	if(error) {
		console.error(error);
	} else {
		console.info("Sever running at http://localhost:" + port);
	}
})
