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

    // if row is on 3rd to last row or earlier, skip checking down
    if (i > length - 4) {
      checkRows.down = false;
    }

    // if row is on rows 0 - 2, skip checking up
    if (i < 3) {
      checkRows.up = false;
    }

    const reg = /X/g;

    // find all x in the line, and do something with it
    while ((match = reg.exec(line))) {
      const ind = match.index;

      // check top-left diagonal
      if (
        ind >= 3 &&
        checkRows.up &&
        lines[i - 1][ind - 1] === "M" &&
        lines[i - 2][ind - 2] === "A" &&
        lines[i - 3][ind - 3] === "S"
      ) {
        p1Count++;
      }

      // check vertical
      if (
        checkRows.up &&
        lines[i - 1][ind] === "M" &&
        lines[i - 2][ind] === "A" &&
        lines[i - 3][ind] === "S"
      ) {
        p1Count++;
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
      }

      // check backward
      if (
        ind >= 3 &&
        line[ind - 1] === "M" &&
        line[ind - 2] === "A" &&
        line[ind - 3] === "S"
      ) {
        p1Count++;
      }

      // check forward
      if (
        ind <= lineLength - 4 &&
        line[ind + 1] === "M" &&
        line[ind + 2] === "A" &&
        line[ind + 3] === "S"
      ) {
        p1Count++;
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
      }

      // check directly down
      if (
        checkRows.down &&
        lines[i + 1][ind] === "M" &&
        lines[i + 2][ind] === "A" &&
        lines[i + 3][ind] === "S"
      ) {
        p1Count++;
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
      }
    }
  });
  console.log("P1 count:", p1Count);

  let p2Count = 0;
  // Part 2
  // y axis, incrementing
  lines.map((line, i) => {
    let checkRows = {
      up: true,
      down: true,
    };

    // console.log(
    //   `\nline ${0}, length + 4: ${length + 4}, length - 3: ${length - 3}`
    // );

    // if row is on the last row, skip checking down
    if (i === length - 1) {
      checkRows.down = false;
    }

    // if row is on the first row
    if (i === 0) {
      checkRows.up = false;
    }

    // console.log({ line: i + 1, checkRows });

    const reg = /A/g;

    // find all x in the line, and do something with it
    while ((match = reg.exec(line))) {
      const ind = match.index;

      // console.log("index:", ind);

      if (
        ind > 0 &&
        i > 0 &&
        i < line.length - 1 &&
        checkRows.up &&
        // top-left to bottom-right
        ((lines[i - 1][ind - 1] === "M" && lines[i + 1][ind + 1] === "S") ||
          (lines[i - 1][ind - 1] === "S" && lines[i + 1][ind + 1] === "M")) &&
        // top-right to bottom-left
        ((lines[i - 1][ind + 1] === "M" && lines[i + 1][ind - 1] === "S") ||
          (lines[i - 1][ind + 1] === "S" && lines[i + 1][ind - 1] === "M"))
      ) {
        p2Count++;
      }
    }
  });
  console.log("P2 count:", p2Count);
});
