const router = require('express').Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'excercise'
});

connection.connect((err)=>{
  if(err){
      throw err;
  }
  else{
      console.log("connected to DB");
  }
});


router.route('/addexercise').post((req, res) => {
  // Insert exercise
  let post = {username:'Ronit', nameOfExercise:'Running', calories: 3, duration: 5};
  let sql = 'INSERT INTO exercise SET ?';
  connection.query(sql, post, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('Post 1 added...');
  });
});

// Get all exercises.
router.route('/getexercise').get((req, res) => { 
  let sql = 'SELECT * FROM exercise';
  connection.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('All exercises: ');
  });
});

module.exports = router;