fs = require('fs');
fs.readFile('Day3.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  let lines = data.split('\n');

  let sum = 0;
  let skipMul = false;

  lines.forEach(line => {
    let matches = line.match(/(mul\((\d+),(\d+)\)|do\(\)|don't\(\))/g);
    matches.forEach(match => {
      if(match.includes("don't")) return skipMul = true;
      else if (match.includes("do")) return skipMul = false;
      if (skipMul) return;
      let numbers = match.match(/\d+/g).map(Number);
      sum += numbers[0] * numbers[1]
    })
  })

  console.log("P2:", sum)
});