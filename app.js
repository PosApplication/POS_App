var express = require('express');
var app = express();
var mysql = require('mysql');
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
var path = require('path');
app.use(express.static(path.resolve('./public')));
var routes=require('./routes');
app.get('/',routes.home);

app.get('/frontend', function(req, res) {
	var con = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database:'node'
		});

con.connect(function(err) {
	  if (err) throw err;
	  con.query("SELECT * FROM dropdown", function (err, result, fields) {
	    if (err) throw err;
	    var list=result;
	    console.log('success');
	    res.render('index.ejs',{list:list});
	    console.log(fields);
	  });
	});
});


	app.get('/productHandler', function(req, res) {
		
		var con = mysql.createConnection({
			  host: "localhost",
			  user: "root",
			  password: "",
			  database: "node"
			});

		con.connect(function(err){
		
		if(err)
			{
			console.log("error");
			
			}else{
				res.write("Successfully connected to database");
				var ProductName = req.query.productname;
				var ProductCode = req.query.productCode;
				var ProductPrice = req.query.productprice;
				var ProductType = req.query.producttype;
				var ProductTax = req.query.producttax;
				
			  var values = [

					[ ProductName, ProductCode, ProductPrice, ProductType,
							ProductTax ]

					];
					var data = "insert into posapp values ?";
					con.query(data, [ values ], function(err) {

						if (err) {
							console.log(err);
						} else {
							console.log([values]);
							res.write(" and Data inserted successfully");
							res.end();
						}
						});
					
		
	}
		});
	});
	
/*	app.get('/',
			function(req, res) {

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM dropdown", function (err, result, fields) {
    if (err) throw err;
    console.log(result.toString());
    res.end();
    //res.query(result);
  });
});
	});*/
	app.listen(7000,function(){
		console.log("server 6000 runnig successfully");
	});


