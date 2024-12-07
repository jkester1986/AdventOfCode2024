fs = require('fs');
fs.readFile('Day4.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  let lines = data.split('\n').split();
  let length = lines.length;
  let lineLength = line[0].length;

  // y axis, incrementing
  lines.map((line, i) => {
    let checkRows = {
      up: true,
      down: true,
    }
    // if row is on 3rd to last row or earlier, skip checking up
    if (i > length - 3) {
      checkRows.up = false;
    }

    // if row is on rows 0 - 2, skip checking down
    if (i < length + 4) {
      checkRows.down = false;
    }

    let search = true;
    while(search) {
      let ind = line.findIndex((char) => char === "x");
      lines[i][ind] = 0;
      
    }
  })
});