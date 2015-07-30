var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/helloworld',function(req,res,next){
	res.render("helloworld", {title : "Helloresm, world."} );
});

router.get('/userlist',function(req,res,next){
	var db = req.db;
	var collection = db.get('UserDetails');
	collection.find({},{},function(e,docs){
		console.log(docs);
		res.status(200);
		res.send(docs);
		res.end();
	});
});

function setCORSHeaders(res) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
}


module.exports = router;
