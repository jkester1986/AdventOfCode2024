fs = require('fs');
fs.readFile('Day2.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  let lines = data.split('\n').map(line => line.split(" ").map(Number));
  let safeCount = 0;

  lines.forEach(line => {
    let isSafe = isSafeLine(line);

    if (isSafe) {
      safeCount++;
    }

    else {
      const length = line.length;
      let currIndex = 0;
      let isSafeWithRemoval = false;
      while (currIndex < length || isSafeWithRemoval) {
        let testLine = line.slice();
        testLine.splice(currIndex, 1);
        isSafeWithRemoval = isSafeLine(testLine);
        if (isSafeWithRemoval) {
          safeCount++;
          break;
        }
        currIndex++;
      }
    }
  });

  // P2
  console.log({safeCount})

});

function isSafeLine(line) {
  let isSafe = true;
  let increasing;
  let decreasing;
  line.forEach((val, i) => {
    if (line[i + 1] || line[i + 1] === 0) {
      if (val < line[i + 1]) {
        increasing = true;
      } else if (val > line[i + 1]) {
        decreasing = true;
      }
      else {
        increasing = true;
        decreasing = true;
      }

      if (Math.abs(val - line[i + 1]) > 3 || (increasing && decreasing)) {
        isSafe = false;
      }
    }
  });

  return isSafe;
}