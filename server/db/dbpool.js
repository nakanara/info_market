
// DB 
// db/dbpoo.js

var mariaSql = require('mariasql');
conn = new mariaSql();

conn.connect({
	host: 'localhost',
	post: 3306,
	user: 'test',
	password : 'test',
	database : 'test',
	db : 'maria' 
});

conn.on('connect', function(){
	console.log("DB Conencted");
}).on('error', function(err){
	console.log('DB Error : ' + err);
}).on('close', function(hadError){
	console.log('DB Close');
});

conn.query('select * from test where test1= :test1', {test1 :'1'})
		.on('result', function(res){
		res.on('row', function(row){
			console.log('Result Row: ' + row);
		})
		.on('error', function(err){
			console.log('Result Error :' + err);
		})
		.on('end', function(info){
			console.log('Result finished successfully');
		});
	});