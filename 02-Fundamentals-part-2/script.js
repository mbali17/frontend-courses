//This should be the first line of code either within a function or the beginnning of the JS file. This flags errors in the script.
"use strict";
var calcAverage = function (score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
};

var checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win (${avgDolphins} vs ${avgKoalas}) `;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `KOalas win (${avgKoalas} vs ${avgDolphins}) `;
  }
  return "NO WINNER";
};

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27) ;
console.log(`avgDolphins: ${avgDolphins}`);
console.log(`avgKoalas: ${avgKoalas}`);
console.log(checkWinner(avgDolphins, avgKoalas));
