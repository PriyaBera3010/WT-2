//Print Sum of series 1 - 2 + 3 - 4 + 5 - 6 + 7 ...n
let n = 10;
let sum = 0;

for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
        sum -= i;
    } else {
        sum += i;
    }
    
console.log(sum);
}