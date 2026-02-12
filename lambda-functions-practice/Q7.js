//7.Write a lambda function that returns “positive” if a number > 0 if num==0 then “ZERO” else “negative”.

 let checkNum = (num) => (num > 0 ? "positive" : num === 0 ? "ZERO":"negative");
console.log(checkNum(5));
console.log(checkNum(0));
 console.log(checkNum(-3));

