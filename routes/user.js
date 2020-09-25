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

//Add user
router.route('/adduser').post((req, res) => {
  let post = {name:'Ronit', exerciseName:'Running'};
  let sql = 'INSERT INTO user SET ?';
  connection.query(sql, post, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('Post 1 added...');
  });
});

// Get all users.
router.route('/getusers').get((req, res) => {
  let sql = 'SELECT * FROM user';
  connection.query(sql, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('All users: ');
  });
});

// Update user with id.
router.route('/updateuser/:id').get((req, res) => {
  console.log("Hello update");
  // let newName = "Roniti";
  let post = {name:'Roniti', exerciseName: 'walkingggg'}
  // let exerciseName = "Walking";
  let sql = `Update user SET ? name = '${post.name}' exerciseName = '${post.exerciseName}' WHERE id = ${req.params.id}`;
  connection.query(sql, post, (err, result) => {
      if(err) throw err;
      console.log(result);
      res.send('Updated user.');
  });
});

module.exports = router;