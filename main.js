// 1
// const students = [
//     { name: "Quincy", percent: 96 },
//     { name: "Jason", percent: 84 },
//     { name: "Alexis", percent: 100 },
//     { name: "Sam", percent: 65 },
//     { name: "Katie", percent: 90 },
//     { name: "Anna", percent: 75 },
// ];
// const gradeValue = students.map((item) =>({
//     if(item.percent >= 85){
//         return

//     }

// }))
// console.log(gradeValue);

  


// 2
// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// const count = animals.reduce((acc, item) => {
//     if(!acc[item]){
//         acc[item] = 1
//     }
//     else{
//         acc[item]++
//     }
//     return acc;
// })
// console.log(count);

// 3
const array = [1, 2, 3, 4, 5];
const arraySquare = array.map((item) =>{
    return item * item
})
console.log(arraySquare);

console.log('<---------------->');
console.log('<---------------->');

// 4
const numbers = [1, -4, 12, 0, -3, 29, -150];
const positive = numbers.filter(number => number > 0);
const sum = positive.reduce(function(acc, item){
   return acc = acc + item
}, 0)
console.log(sum);

console.log('<---------------->');
console.log('<---------------->');

