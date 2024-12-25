fs = require('fs');
fs.readFile('Day9.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  let id = 0;
  // let pattern = /(.)\1+/;
  let remaining = data;
  let disk = "";

  while (remaining) {
  }
});