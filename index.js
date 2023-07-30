let scores = [82, 75, 48, 64, 36];

// let failedScore = scores.find((score) => {
//     return score < 50;
// }); 

// console.log(scores);
// console.log(failedScore);

let failedScore = scores.findIndex((score) => {
    return score < 50;
}); 

console.log(scores);
console.log(failedScore);