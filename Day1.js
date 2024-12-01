fs = require('fs');
fs.readFile('Day1.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  let lines = data.split('\n');

  const leftList = Array();
  const rightList = Array();
  const rightListSet = new Map();

  lines.forEach(line => {
    const [left, right] = line.split("   ").map(Number);
    leftList.push(left);
    rightList.push(right);
  });

  leftList.sort((a, b) => {
    return a - b});
  rightList.sort((a, b) => {
    return a-b});
  rightList.map((val) => rightListSet[val] =  rightListSet[val] ? + rightListSet[val] + 1 : 1);

  let dist = 0;
  let similarityScore = 0;
  leftList.map((val, i) => {
   dist += Math.abs(val - rightList[i]);

   similarityScore += val * (rightListSet[val] || 0);
  });

  console.log("P1:", {dist})
  console.log("P2:", {similarityScore})

});