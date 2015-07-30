var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var users = db.get('users');
  users.find({},{},function(e,docs){
		console.log(docs);
		res.status(200);
		res.send(docs);
		res.end();
	});
  
});

router.post('/adduser',function(req,res,next){
	var db = req.db;
	var users = db.get('users');
	var userName = req.body['userName'];
	var password = req.body['password'];
	var userEmail = req.body['email'];
	users.insert({ userName: userName,password:password, userEmail:userEmail}, function (err, doc) {
	  if (err) throw err;
	});
	res.status(200).json({ message: 'user added successfully.' })
	res.end();
});

router.put('/updateuser',function(req,res,next){
	var db = req.db;
	var users = db.get('users');
	var userId = (req.body['_id']).toString();
	var userName = req.body['userName'];
	var password = req.body['password'];
	var userEmail = req.body['email'];
	console.log(req.body);
	users.updateById('_id', {_id:userId,userName:userName,password:password,email:userEmail}, function (err, doc) {
	  if (err) throw err;
	});
	res.status(200).json({ message: 'user updated successfully.' })
	res.end();
});


module.exports = router;
