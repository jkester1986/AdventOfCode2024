fs = require("fs");
fs.readFile("Day5.txt", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  let [pageOrders, updateLines] = data.split("\n\n");
  const pageOrderSets = pageOrders
    .split("\n")
    .map((line) => line.split("|").map(Number));

  console.log(pageOrderSets);

  updates = updateLines.split("\n").map((line) => line.split(",").map(Number));

  function isOrderedCorrectly(update) {
    let tooHighIndex;
    let rulesMet = pageOrderSets.every((pageOrderSet) => {
      if (
        update.includes(pageOrderSet[0]) &&
        update.includes(pageOrderSet[1]) &&
        update.indexOf(pageOrderSet[0]) > update.indexOf(pageOrderSet[1])
      ) {
        tooHighIndex = update.indexOf(pageOrderSet[0]);
        return false;
      }
      return true;
    });

    return { rulesMet, tooHighIndex };
  }

  let updatesOutOfOrder = [];

  let middleSum = 0;

  // figure out what's valid, and the invalid ones push to  updatesOutOfOrder
  updates.forEach((update) => {
    let middle = update[Math.floor(update.length / 2)];
    let { rulesMet, tooHighIndex } = isOrderedCorrectly(update);

    if (rulesMet) {
      middleSum += middle;
    } else {
      updatesOutOfOrder.push([update, tooHighIndex]);
    }
  });

  console.log("P1:", middleSum);

  // console.log(updatesOutOfOrder);

  // Go through the ones that are out of order, and attempt to order them.
  // Shift the too high index to before all the numbers it should be before
  // updatesOutOfOrder.forEach(update => [
  //   let reodered = [...update]
  //   while (!isOrderedCorrectly(reordered)) {

  //   }
  // ])
});
