fs = require('fs');
fs.readFile('Day6.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  let lines = data.split('\n');
  let map = {};
  let guardPos;

  lines.forEach((line, y) => {
    line.split('').forEach((char, x) => {
        map[`${x},${y}`] = {
          barrier: char === '#',
          x, y
        };
        if (char === "^") guardPos = {x, y, inc: -1, dir: "y"};
    });
  });

  const visited = new Set();
  // move the guard while he's still on the map
  while (map[`${guardPos.x},${guardPos.y}`]) {
    visited.add(`${guardPos.x},${guardPos.y}`);
    let possNextPos;
    if (guardPos.dir === "y") {
      possNextPos = map[`${guardPos.x},${guardPos.y + guardPos.inc}`];
    }
    else {
      possNextPos = map[`${guardPos.x + guardPos.inc},${guardPos.y}`];
    }

    // make the guard turn if a barrier is found
    if (possNextPos?.barrier) {
      // change increment direction if going from y => x, but not from x => y
      if (guardPos.dir === "y") {
        guardPos.inc *= -1;
      }
      guardPos.dir = guardPos.dir === "y" ? "x" : "y";
    }
    else {
      guardPos.x = possNextPos?.x;
      guardPos.y = possNextPos?.y;
    }
  }
  console.log({visited: visited.size});
});