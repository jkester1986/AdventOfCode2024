fs = require('fs');
fs.readFile('Day7.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  let lines = data.split('\n').map(line => {
    let updatedLine = line.split(" ");
    updatedLine[0] = updatedLine[0].substring(0, updatedLine[0].length - 1);
    updatedLine = updatedLine.map(Number);
    return updatedLine;
  });

  lines.forEach(line => {
    const target = line.shift();
    let met = false;
    let tooHigh = false;

    console.log({target})

    // while(!met) {

    // }
  })

});