module.exports = function getZerosCount(number) {
let zeroCount = 0;
for (let i = 5; i <= number; i += 5) {
    let sum = i;
    while (sum % 5 == 0) {
        sum /= 5;
        zeroCount++;
     }
}
return zeroCount;
 
}



