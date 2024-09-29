// 1
const students = [
    { name: "Quincy", percent: 96 },
    { name: "Jason", percent: 84 },
    { name: "Alexis", percent: 100 },
    { name: "Sam", percent: 65 },
    { name: "Katie", percent: 90 },
    { name: "Anna", percent: 75 },
];
let getNamesWithGrade = (grade) => {
  const getGrade = (percent) => {
    if(percent >= 85) {
      return 5;
    }
    else if(percent >= 70) {
      return 4;
    }
    return 3;
  }
  let studentsWithGrades = students.map(element => {
    element.grade = getGrade(element.percent);
    return element;
  });
  console.log(studentsWithGrades)

  return students.filter(student => getGrade(student.percent) == grade)
  .map(student => student.name);
}
console.log(getNamesWithGrade(5));

console.log('<---------------->');
console.log('< 1 ---------------->');


  
// 2
const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
const output = animals.reduce((obj, key) => {
  if(obj[key] === undefined)
      obj[key] = 1;
  else 
      obj[key]++;
  return obj;
}, {});
console.log(output);


console.log('<---------------->');
console.log('< 2 ---------------->');


// 3
const array = [1, 2, 3, 4, 5];
const arraySquare = array.map((item) =>{
    return item * item
})
console.log(arraySquare);

console.log('<---------------->');
console.log('< 3 ---------------->');

// 4
const numbers = [1, -4, 12, 0, -3, 29, -150];
const positive = numbers.filter(number => number > 0);
const sum = positive.reduce(function(acc, item){
   return acc = acc + item
}, 0)
console.log(sum);

console.log('<---------------->');
console.log('< 4 ---------------->');

// 5
const str ='George Raymond Richard Martin';
const strToArray = str.split(" ").map(currentString =>{
  let firstChar = currentString.charAt(0);
  if(firstChar == firstChar.toUpperCase()){
    return firstChar;
  } return "";
} ).join("");

console.log(strToArray);

console.log('<---------------->');
console.log('< 5 ---------------->');


// 6
const peoples = [
  {name: 'John', age: 13},
  {name: 'Mark', age: 56},
  {name: 'Rachel', age: 45},
  {name: 'Nate', age: 67},
  {name: 'Jeniffer', age: 65}
];
const sortedPeople = peoples.sort((a,b) => {a.age-b.age});
console.log(sortedPeople[sortedPeople.length-1].age - sortedPeople[0].age);
console.log('<---------------->');
console.log('< 6 ---------------->');



// 7
var arr1 = [200, 163, 26, 4, 0, 7, 76];
var evens = arr1.filter(function(x) {
  if (x % 2 === 0) {
    return x;
  }
})
var odds = arr1.filter(function(x) {
    if (x % 2 === 1) {
      return x;
    }
  })

console.log(evens);
console.log(odds);

console.log('<---------------->');
console.log('< 7 ---------------->');

// 8
const items = [1, 2, 9, 3, 1, 2, -6, 3, 7, 8, 7, -6];
const sameValue = items.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item);
  }
  return acc;
}, []);

console.log(sameValue);   

console.log('<---------------->');
console.log('< 8 ---------------->');


// 9  
let products = [
    {
      id: 1,
      name: "Smarthpone",
      price: 12000,
      rating: 4.5,
      discount: 20,
    },
    {
      id: 2,
      name: "Acer",
      price: 10000,
      rating: 4.3,
      discount: 10,
    },
    {
      id: 1,
      name: "Mac book",
      price: 17000,
      rating: 4.7,
      discount: 40,
    },
    {
      id: 4,
      name: "HP",
      price: 21000,
      rating: 4.1,
      discount: 30,
    },
    {
      id: 5,
      name: "Dell",
      price: 35000,
      rating: 4.9,
      discount: 30,
    },
  ];

const sortedProducts = products.sort(function (a, b) {
  return a.id - b.id || a.name.localeCompare(b.name) 
  || a.price - b.price ||a.rating - b.rating ||a.discount - b.discount ;
});
console.log(sortedProducts);


  
console.log('<---------------->');
console.log('< 9 ---------------->');


// 10
products.sort((a,b) => b.rating - a.rating);
console.log(products);

console.log('<---------------->');
console.log('< 10 ---------------->');

// 11
products.sort((a,b) => a.price - b.price);
console.log(products);
  
console.log('<---------------->');
console.log('< 11 ---------------->');


// 12
const totalCost = products.reduce((acc, item) => acc + item.price , 0)
console.log(totalCost);

console.log('<---------------->');
console.log('< 12 ---------------->');


// 13
const selectByName = products.map(({name}) => ({name}));
console.log(selectByName);

console.log('<---------------->');
console.log('< 13 ---------------->');


// 14
const result = products.find(({ id }) => id === 5);
console.log(result.name);

console.log('<---------------->');
console.log('< 14 ---------------->');


// 15
let filteredNumbers = products.filter(product => product.id !== 4);
console.log(filteredNumbers);

console.log('<---------------->');
console.log('< 15 ---------------->');

// 16
const string = 'hello world 55';
const isLetter = string.split(" ").every(e => isNaN(e));
console.log(isLetter);

console.log('<---------------->');
console.log('< 16 ---------------->');

// 17
const values = [false, 1, 10, "", null, "sultonqul", 1.13, 0];

const truthyValues = values.filter(Boolean);
const falsyValues = values.filter(item => !Boolean(item));

console.log(truthyValues);
console.log(falsyValues);

console.log('<---------------->');
console.log('< 17 ---------------->');

// 18
const text = "Men Sultonqul Programmerman";
const lengthArray = text.split(" ").map(item => item.length)
console.log(lengthArray);

console.log('<---------------->');
console.log('< 18 ---------------->');

// 19
const title = "Men Sultonqul Programmerman";
const emptySpace = title.split("").some(e => e.includes(" "));
console.log(emptySpace);

console.log('<---------------->');
console.log('< 19 ---------------->');

// 20
const obj = {a: 2, b: 5, c: 7};
const objToArray = Object.entries(obj).map(([key, value]) => {
  return key + value;
  })
console.log(objToArray);

console.log('<---------------->');
console.log('< 20 ---------------->');

// 21
let digitSum = (n) => {
  if (n < 10) {
      return n;
  }
  let number = Math.floor(n / 10);
  return n % 10 + digitSum(number);
}
console.log(digitSum(654));

console.log('<---------------->');
console.log('< 21 ---------------->');

// 22
const pupils = [
  {
    name: "Elbek",
    protcent: 95,
  },
  {
    name: "Zafar",
    protcent: 78,
  },
  {
    name: "Aziz",
    protcent: 83,
  },
  {
    name: "Jasur",
    protcent: 88,
  },
  {
    name: "Bobur",
    protcent: 66,
  },
  {
    name: "Kamron",
    protcent: 75,
  },
];
const averagePercent = pupils.reduce((acc,item) => acc += item.protcent, 0)/pupils.length
console.log(averagePercent);

const newArray = pupils.map(e => e.name +" "+ e.protcent)
console.log(newArray);

console.log('<---------------->');
console.log('< 22 ---------------->');


// 23
let getStudentsWithGrade = () => {
  const getGrade = (percent) => {
    if(percent >= 90) {
      return 5;
    }
    else if(percent >= 80) {
      return 4;
    }
    else if(percent >= 70) {
      return 3;
    }
    return 2;
  }

  return pupils.map(element => {
  element.grade = getGrade(element.protcent);
  return element;
  });
}
console.log(getStudentsWithGrade());

console.log('<---------------->');
console.log('< 23 ---------------->');

// 24
let getPassed  = () => {
return pupils.map(element => {
  element.isPassed = element.protcent > 70;
  return element;
  });
}
console.log(getPassed());  

console.log('<---------------->');
console.log('<24 ---------------->');














  




