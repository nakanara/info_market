
var http = require('http');
var url = require('url');
var address = require('./server/address/address.js')
var fs = require('fs');
var express = require('express');


var app = express();
app.configure(function(){
	app.use(express.static('public'));
})

function route(handle, pathname, request, response) {
	console.log("Route:" + pathname);
	var xxxx = url.parse(request.url).pathname;
	console.log(xxxx);

	if(typeof handle[pathname] === 'function'){
		handle[pathname](pathname, request, response);
	} else {
		console.log('no Request handler');
	}
}


exports.reote = route;

function view(){
	console.log('request handler view');
}

function create(){
	console.log('request handler create');
}

function next(req, res){

	var obj = address.getNextUserInfo();
	console.log(obj);
	console.log('request Next User');

	res.send(obj);
	res.end();
}

function web(req, res){
	console.log("Web ---in page:" + req.param.page);
	var def_path = 'D:/study/nodejs/test';

	var pathname = url.parse(req.url).pathname;

	console.log('def_path=' + (def_path + pathname) + ".html");
	console.log('params:' + req.param.id);

	fs.readFile(def_path + pathname + ".html", function(err, data){
		if(err){
			console.log(err);
			//res.writeHead(404, {'Content-Type': 'text/html'});
		} else {
			//res.writeHead(200, {'Content-type' : 'text/html'});
			res.send(data.toString());

		}
		res.end();
	});

}

function getUserHPNumber(req, res){

	var num = address.getUserHPNumber ();
	res.send(num);
	res.end();
//	res.end();
	
}

/*
var handle = {};
handle['/'] = view;
handle['/view'] = view;
handle['/create'] = create;
handle['/next'] = next;
handle['/web/html/user/id'] = web;

exports.handle = handle;
*/

/*
app.use('/js', express.static('/public'));
app.use('/css', express.static('/public'));
app.use('/js', express.static('files'));
app.use('/css', express.static('files'));
*/

app.get('/view', view);
app.get('/create', create);
app.get('/next', next);

app.get('/bin/www/:page', web);
app.get('/user/:id', getUserHPNumber);


app.listen(11111);
console.log("Start Server 11111");