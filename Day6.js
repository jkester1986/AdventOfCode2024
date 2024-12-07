fs = require('fs');
fs.readFile('Day6.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  let lines = data.split('\n');

});