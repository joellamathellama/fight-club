var db = require('../lib/db');

db.schema.createTableIfNotExists('users', function (table) {
  table.increments('id').primary();
  table.string('username', 100);
  table.string('password', 100);
  table.string('firstname', 100);
  table.string('lastname', 100);
  table.string('email', 100);
  table.timestamps();
})
.then(function () {
  console.log('users table is ready.');
});

db.schema.createTableIfNotExists('sessions', function (table) {
  //
  // Using an incrementing number as an id is very insecure.
  // You should be able to explain why :)
  table.increments('id').primary();
  table.integer('user_id');
  table.timestamps();
})
.then(function () {
  console.log('sessions table is ready.');
});

// db.schema.createTableIfNotExists('questionaire', function (table) {
//   // store username and their answers
//   table.increments('id').primary();
//   table.integer('user_id');
//   table.timestamps();
// })
// .then(function () {
//   console.log('sessions table is ready.');
// });

db.schema.createTableIfNotExists('chatlog', function (table) {
  table.increments('id').primary();
  table.string('username', 100);
  table.string('room'), 100;
  table.string('message', 1000);
  table.timestamps();
})
.then(function () {
  console.log('chatlog table is ready.');
});