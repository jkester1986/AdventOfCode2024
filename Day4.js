fs = require("fs");
fs.readFile("Day4.txt", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  let lines = data.split("\n");
  let length = lines.length;
  let lineLength = lines[0].length;

  let p1Count = 0;

  // Part 1
  // y axis, incrementing
  lines.map((line, i) => {
    let checkRows = {
      up: true,
      down: true,
    };

    // console.log(
    //   `\nline ${0}, length + 4: ${length + 4}, length - 3: ${length - 3}`
    // );

    // if row is on 3rd to last row or earlier, skip checking down
    if (i > length - 4) {
      checkRows.down = false;
    }

    // if row is on rows 0 - 2, skip checking up
    if (i < 3) {
      checkRows.up = false;
    }

    // console.log({ line: i + 1, checkRows });

    const reg = /X/g;

    // find all x in the line, and do something with it
    while ((match = reg.exec(line))) {
      const ind = match.index;

      // console.log("index:", ind);

      // check top-left diagonal
      if (
        ind >= 3 &&
        checkRows.up &&
        lines[i - 1][ind - 1] === "M" &&
        lines[i - 2][ind - 2] === "A" &&
        lines[i - 3][ind - 3] === "S"
      ) {
        p1Count++;
        // console.log(`line ${i + 1}, found top-left diagonal`);
      }

      // check vertical
      if (
        checkRows.up &&
        lines[i - 1][ind] === "M" &&
        lines[i - 2][ind] === "A" &&
        lines[i - 3][ind] === "S"
      ) {
        p1Count++;
        // console.log(`line ${i + 1}, found up vertical`);
      }

      // check top-right diagonal
      if (
        ind <= lineLength - 4 &&
        checkRows.up &&
        lines[i - 1][ind + 1] === "M" &&
        lines[i - 2][ind + 2] === "A" &&
        lines[i - 3][ind + 3] === "S"
      ) {
        p1Count++;
        // console.log(`line ${i + 1}, found top-right diagonal`);
      }

      // check backward
      if (
        ind >= 3 &&
        line[ind - 1] === "M" &&
        line[ind - 2] === "A" &&
        line[ind - 3] === "S"
      ) {
        p1Count++;
        // console.log(`line ${i + 1}, found backward`);
      }

      // check forward
      if (
        ind <= lineLength - 4 &&
        line[ind + 1] === "M" &&
        line[ind + 2] === "A" &&
        line[ind + 3] === "S"
      ) {
        p1Count++;
        // console.log(`line ${i + 1}, found forward`);
      }

      // check bottom-left diagonal
      if (
        ind >= 3 &&
        checkRows.down &&
        lines[i + 1][ind - 1] === "M" &&
        lines[i + 2][ind - 2] === "A" &&
        lines[i + 3][ind - 3] === "S"
      ) {
        p1Count++;
        // console.log(`line ${i + 1}, found bottom-left diagonal`);
      }

      // check directly down
      if (
        checkRows.down &&
        lines[i + 1][ind] === "M" &&
        lines[i + 2][ind] === "A" &&
        lines[i + 3][ind] === "S"
      ) {
        p1Count++;
        // console.log(`line ${i + 1}, found down vertical`);
      }

      // check bottom-right diagonal
      if (
        ind <= lineLength - 4 &&
        checkRows.down &&
        lines[i + 1][ind + 1] === "M" &&
        lines[i + 2][ind + 2] === "A" &&
        lines[i + 3][ind + 3] === "S"
      ) {
        p1Count++;
        // console.log(`line ${i + 1}, found bottom-right diagonal`);
      }
    }
  });
  console.log("P1 count:", p1Count);
});
