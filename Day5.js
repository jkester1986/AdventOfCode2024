fs = require("fs");
fs.readFile("Day5.txt", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  let [pageOrders, updateLines] = data.split("\n\n");
  const pageOrderSets = pageOrders
    .split("\n")
    .map((line) => line.split("|").map(Number));

  const orderedByKey = {};
  pageOrders.split("\n").forEach((line) => {
    const [low, high] = line.split("|").map(Number);
    orderedByKey[low] = [...(orderedByKey[low] || []), high];
  });

  updates = updateLines.split("\n").map((line) => line.split(",").map(Number));

  // prob could have done this more efficiently with orderedByKey, but not refactoring
  function isOrderedCorrectly(update) {
    let rulesMet = pageOrderSets.every((pageOrderSet) => {
      if (
        update.includes(pageOrderSet[0]) &&
        update.includes(pageOrderSet[1]) &&
        update.indexOf(pageOrderSet[0]) > update.indexOf(pageOrderSet[1])
      ) {
        return false;
      }
      return true;
    });

    return rulesMet;
  }

  let updatesOutOfOrder = [];

  let middleSum = 0;

  // figure out what's valid, and the invalid ones push to  updatesOutOfOrder
  updates.forEach((update) => {
    let middle = update[Math.floor(update.length / 2)];
    let rulesMet = isOrderedCorrectly(update);

    if (rulesMet) {
      middleSum += middle;
    } else {
      updatesOutOfOrder.push(update);
    }
  });

  console.log("P1:", middleSum);

  // P2
  let reorderedMiddleSum = 0;

  // Go through the ones that are out of order, and use a custom sort to reorder them correctly
  updatesOutOfOrder.forEach((update) => {
    let reodered = update.sort((a, b) => {
      if (orderedByKey[a] && orderedByKey[a].includes(b)) {
        return -1;
      } else return 0;
    });

    reorderedMiddleSum += reodered[Math.floor(reodered.length / 2)];
  });

  console.log("P2:", reorderedMiddleSum);
});
