console.log(2 > "1");
console.log("2" > 1);
// DataTypes should be same of the both parameters for the comparison. Otherwise it can give an unpredictable result.

console.log(null == 0);
console.log(null == undefined);
console.log(null > 0);
// Comparisons convert null to a number and than do comaprisons which is not actually true.

// Comparisions of null, undefined and different data types should be avoided as they give an unexpected result and wrong results.
