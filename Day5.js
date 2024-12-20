fs = require('fs');
fs.readFile('Day5.txt', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  let [pageOrders, updateLines] = data.split('\n\n');
  const pageOrderSets = pageOrders.split('\n').map(line => line.split("|").map(Number));
  updates = updateLines.split('\n').map(line => line.split(",").map(Number),);

  let middleSum = 0;
  updates.forEach(update => {
    let middle = update[Math.floor(update.length / 2)];
    let rulesMet = pageOrderSets.every(pageOrderSet => {
      if (update.includes(pageOrderSet[0]) && update.includes(pageOrderSet[1]) && update.indexOf(pageOrderSet[0]) > update.indexOf(pageOrderSet[1])) {
        return false;
      }
      return true;
    });
    if (rulesMet) {
      middleSum += middle;
    }
  });

  console.log("P1:", middleSum);
});