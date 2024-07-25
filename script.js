let shuffled = [1, 2, 3, 4]
let total = 0
let average = 0

shuffled.map((num) => total += num)
console.log(total);

let sum = 0

shuffled.forEach((num) => sum += num);
average = sum / shuffled.length
console.log(average);

