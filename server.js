
var http = require('http');
var url = require('url');
var address = require('./address/address.js')
var fs = require('fs');



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

function next(){

	var obj = address.getNextUserInfo();
	console.log(obj);
	console.log('request Next User');
}

function web(pathname, res, req){
	var def_path = 'D:/study/nodejs/test';

	console.log('def_path=' + (def_path + pathname));

	fs.readFile(def_path + patchname, function(err, data){
		if(err){
			console.log(err);
			response.writeHead(404, {'Content-Type': 'text/html'});
		} else {
			response.writeHead(200, {'Content-type' : 'text/html'});
			response.write(data.toString());

		}
	});
	
}

var handle = {};
handle['/'] = view;
handle['/view'] = view;
handle['/create'] = create;
handle['/next'] = next;
handle['/web/html/user/id'] = web;

exports.handle = handle;


// Create a server
http.createServer( function(request, response){

	var pathname = url.parse(request.url).pathname;

	console.log('pathname=' + pathname);
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	response.write("Hello !" + pathname);

	route(handle, pathname, request, response);
	response.end();

}).listen(11111);

console.log("Start Server 11111");