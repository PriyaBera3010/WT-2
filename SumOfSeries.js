//Print sum of series 1 + 4 + 9 + 16 + 25 + 36 + ...n
let n = 5;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i * i;
}
console.log("Answer is :",sum);