fs = require('fs');
fs.readFile('Day25.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }

  let locks = [], keys = []
  let uniquePairs = 0;

  let = data.split('\n\n').forEach(block => {
    if (block.charAt(0) === ".") {
       return locks.push(block.replace(/\n/g, ""));
    };
    keys.push(block.replace(/\n/g, ""));
  });

  let length = locks[0].length;
  locks.forEach(lock => {
    keys.forEach(key  => {
      let counter = 0;
      let overlap = false;
      // see if there's overlap of "#"
      // Note that THE HEIGHT IS A LIE - it's a totally unecessary pieces of information in the directions for comparison purposes.
      // We don't care about the heights at all, just that there's no overlap.
      while (counter < length && !overlap) {
        if (lock.charAt(counter) === "#" && key.charAt(counter) === "#") {
          overlap = true;
        }
        counter++;
      }
      if (!overlap) {
        uniquePairs++;
      }
    })
  })

  console.log({ uniquePairs });
});