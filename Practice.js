// let students = ["Marry", "Don", "Germione", "Hinevra"];
// let rollCall = students.map(student => student + " the wizard");

// console.log(rollCall);


// function changeState(state, action){      
//     switch (action.type) {
//       case 'Increase_Count':
//         return {count: state.count + 10}
//       case 'DECREASE_COUNT':
//         return {count: state.count - 1}
//       default:
//         return state;
//     }
//   }
  
//   let state = {count: 0}
  
//   console.log(changeState(state, {type: 'Increase_Count'}))

  
//   function greeting(name) {
//     return `Hello, ${name}`;
//   }
  
// let name=Karim

//   console.log(greeting(Karim));

//   function processUserInput(callback) {
//     const name = prompt("Please enter your name.");
//     callback(name);
//   }
  
//   console.log(processUserInput(greeting));

  // function sayHelloTo(firstName) {
  //   console.log(`Hello, ${firstName}!`);
  // }

  // sayHelloTo(karim);

//  console.log(255/5);

//  console.log((100+10)**3);

//  let myBirthYear=1989;

//  console.log(myBirthYear);

//  age = 32

//  console.log (age)

// let t=2;

// console.log(t);

// let a = 5,
//       b = 2,
//       c = 3,
//       d = "Hello",
//       e = "World";

//       console.log(d,e);

//       e = "Universe";

//       console.log(d,e);

// let pi = 3.14159;
// console.log(pi);

// pi = "the ratio between a circle's circumference and diameter";
// console.log(pi);

// console.log(typeof 42.76);

// console.log(typeof 'hello');

// console.log(typeof true);

// console.log(typeof '');

// x = {
//   "name": "JavaScript",
//   "createdBy": {
//     "firstName": "Brendan",
//     "lastName": "Eich"
//   "firstReleased": 1995,
//   "isAwesome": true
// };

// console.log(typeof x)

// console.log(x.name);

// console.log(x.createdBy.firstName);

// console.log(x.firstReleased);

// let dogs = ['Byron', 'Cubby', 'Boo Radley', 'Luca'];
// console.log(typeof dogs);

// console.log(typeof null);

// console.log({}+{});

// const barkCount = '3/Three';
// const backtick = `Byron barks ${barkCount} times` //=> "Byron barks 3 times"
// console.log(backtick);
// const singleQuote = 'Byron barks ${barkCount} times' //=> "Byron barks ${barkCount} times"
// console.log(singleQuote);
// const doubleQuote = "Byron barks ${barkCount} times" //=> "Byron barks ${barkCount} times"
// console.log(doubleQuote);

// const byron = `Byron is ${2+3} years old`

// console.log(byron);

// const littleWomanEsque1 = '"Wait," said Jo, "Do not go without me!"'
// console.log(littleWomanEsque1);

// const littleWomanEsque2 = '"Wait," said Jo, "Do not go without me!"'
// console.log(littleWomanEsque2);

// const littleWomanEsque = '"Wait," said Jo, "Don\'t go without me!"'
// console.log(littleWomanEsque);

// console.log(Boolean(false));

// console.log(Boolean(null));

// console.log(Boolean(undefined));

// console.log(Boolean(0));

// console.log(Boolean(NaN));

// console.log(Boolean(''));

// console.log(Boolean(true));

// console.log(Boolean(42));

// console.log(Boolean('Hello, World'));

// console.log(42 === 42);

// console.log(42 === '42');

// console.log(true === 1);

// console.log(88>9);

// var num1 = 42;
// var num2 = '42';
// if (num1 === num2) {
//     console.log(true);
// } else {
//     console.log(false);
// }
// Will log `false`

// console.log(Number('123')); // returns 123
// console.log(Number('12.3')); // returns 12.3
// console.log(Number('3.14someRandomStuff')); // returns NaN
// console.log(Number('42px')); // returns NaN

// const truthyValue = 'This value is truthy.';

// console.log(`${!!truthyValue}`); //true
// console.log(truthyValue); //This value is truthy.

// console.log(!truthyValue); // false

// console.log(!!truthyValue); //true

// console.log(!!!!!!!!truthyValue); //true

// console.log(!!!!!!!!!truthyValue); //false

// console.log(false && 4); //false

// console.log(4 && false); //false

// console.log(false && false); //false

// console.log(4 && 4); //4

// console.log('4' && '4'); //4

// console.log('6' && '4'); //4

// console.log('4' && '6'); //6

// const booleanExpression = 7;

// TERNARY OPERATOR

// console.log(booleanExpression ? "thingToReturnIfTrue" : "thingToReturnIfFalse"); // thingToReturnIfTrue

// const booleanExpression = 0;

// console.log(booleanExpression ? "thingToReturnIfTrue" : "thingToReturnIfFalse"); // thingToReturnIfFalse

// console.log('2' ? "thingToReturnIfTrue" : "thingToReturnIfFalse"); //thingToReturnIfTrue

// console.log(false ? "thingToReturnIfTrue" : "thingToReturnIfFalse"); //thingToReturnIfFalse

// console.log(0 ? "thingToReturnIfTrue" : "thingToReturnIfFalse"); //thingToReturnIfFalse

// const likelyToRain = true;
// console.log(likelyToRain ? "rain boots" : "sun hat"); //rain boots

// const likelyToRain = 0;
// console.log(likelyToRain ? "rain boots" : "sun hat"); //sun hat

// const rainPercentage = 0.2;
// console.log(rainPercentage > 0.3 ? "rain boots" : "sun hat"); //sun hat

// const rainPercentage = 0.6;
// console.log(rainPercentage > 0.3 ? "rain boots" : "sun hat"); //rain boots

// const name = "John";
// const rainPercentage = 0.2;
// const temperatureInC = 26;

// console.log(`Hello, ${name}, with a rain chance of ${rainPercentage * 100}% and a temperature of ${temperatureInC}C we recommend that you ` + (rainPercentage >= 0.3 ? "take an umbrella" : "enjoy this rain-free day") +
// `${temperatureInC >= 26 ? ' and watch out for heatstroke.' : ' and bask in this fine weather.'}`);
// Hello, John, with a rain chance of 20% and a temperature of 26C we recommend that you enjoy this rain-free day and watch out for heatstroke.


// const name = "John";
// const rainPercentage = 0.4;
// const temperatureInC = 24;

// console.log(`Hello, ${name}, with a rain chance of ${rainPercentage * 100}% and a temperature of ${temperatureInC}C we recommend that you ` + (rainPercentage >= 0.3 ? "take an umbrella" : "enjoy this rain-free day") + `${temperatureInC >= 26 ? ' and watch out for heatstroke.' : ' and bask in this fine weather.'}`);

// Hello, John, with a rain chance of 40% and a temperature of 24C we recommend that you take an umbrella and bask in this fine weather.

// const name = "Byron the Poodle";
// const probabilityOfRain = 0.2;
// const temperatureInC = 26;

// console.log(`Hello, ${name}, with a rain chance of ${probabilityOfRain * 100}% and a temperature of ${temperatureInC}C we recommend that you ` + (probabilityOfRain > 0.3 ? "take an umbrella" : "enjoy this rain-free day") + `${temperatureInC >= 26 ? ' and watch out for heatstroke.' : ' and bask in this fine weather.'}`);

// const name = "John";
// const probabilityOfRain = 0.2;
// const temperatureInC = 26;

// const likelyToRain = probabilityOfRain > 0.3;
// const sunIsDangerous = temperatureInC >= 26;
// const rainPercentage = probabilityOfRain * 100;

// console.log(`Hello, ${name}, with a rain chance of ${rainPercentage}% and a temperature of ${temperatureInC}C we recommend that you ` + (likelyToRain ? "take an umbrella" : "enjoy this rain-free day") + `${sunIsDangerous ? ' and watch out for heatstroke!' : ' and bask in this fine weather.'}`);

// const name = "John";
// const probabilityOfRain = 0.2;
// const temperatureInC = 26;

// const likelyToRain = probabilityOfRain > 0.3;
// const sunIsDangerous = temperatureInC >= 26;
// const rainPercentage = probabilityOfRain * 100;

// const rainAdvice = likelyToRain ? "take an umbrella" : "enjoy this rain-free day";
// const sunAdvice = sunIsDangerous ? "watch out for heatstroke" : "bask in this fine weather";

// console.log(`Hello, ${name}, with a rain chance of ${rainPercentage}% and a temperature of ${temperatureInC}C we recommend that you ${rainAdvice} and ${sunAdvice}.`);

// const first = 2;
// const second = 7;
// const problemCount = 99;
// const luckyNumber = (first > second) ? ( (problemCount - 1) / 2 ) : ( problemCount / 3 );
// console.log(luckyNumber);

// let favoriteNumber = 32;

// console.log(favoriteNumber);

// if (favoriteNumber >= 10) { // evaluating favoriteNumber >= 10 returns true
//   favoriteNumber = favoriteNumber + 10
// } 
// console.log(favoriteNumber);

// let favoriteNumber = 0;
// while (favoriteNumber < 10) {
//   favoriteNumber = favoriteNumber + 1
// }
// console.log(favoriteNumber);

// const lineOne = "Joy to the world";
// const lineTwo = "All the boys and girls";
// const lineThree = "Joy to the fishes in the deep blue sea";
// const lineFour = "Joy to you and me";

// // The '\n' inserts a new line into the string
// const chorus = `${lineOne}\n${lineTwo}\n${lineThree}\n${lineFour}`;

// console.log(chorus);

// if (condition) {
//   // Block of code
// }

// if and else

// const age = 19;

// let childOrAdult;

// if (age >= 18) {
//   childOrAdult = "Is an Adult";
// } else {
//   childOrAdult = "Is Child"
// }

// console.log(childOrAdult);

// console.log(age >= 18 ? "Is an Adult" : "Is Child")

// console.log(age >= 18 ? (childOrAdult = true) : (childOrAdult = false));

// console.log(age >= 18 ? "Congratulations! You're an adult!" : "Enjoy your childhood while it lasts!");


// const age = 16;

// let isAdult, canWork, canEnlist, canDrink;

// if (age >= 21) {
//   canWork = true;
//   canEnlist = true;
//   isAdult = true;
//   canDrink = true;
// }
// else if (age >= 18) {
//   canWork = true;
//   canEnlist = true;
//   isAdult = true;
// }
// else if (age >= 16) {
//   canWork = true;
// }

// console.log(canWork, isAdult, canEnlist, canDrink);


// const age = 12;

// let isAdult, canWork, canEnlist, canDrink;

// if (age >= 16) {
//   canWork = "I can work, ";

//   if (age >= 18) {
//     isAdult = "I am Adult, ";
//     canEnlist = "I can Enlist, ";

//     if (age >= 21) {
//       canDrink = "I can Drink, ";
//     }
//   }
// }

// console.log(isAdult, canWork, canEnlist, canDrink);

// const name = "Hatt";
// let greeting;

// if (name === "Alice") {
//   greeting = "Hello, Alice!"
// } else if (name === "Rabbit") {
//   greeting = "Don't be late, White Rabbit"
// } else if (name === "Hatter") {
//   greeting = "Welcome to the tea party, Mad Hatter"
// } else if (name === "The Queen of Hearts") {
//   greeting = "Please don't chop off my head!"
// } else {
//   greeting = "Whoooo are you?"
// }

// console.log(greeting);

// const name = "Alice";
// let greeting;

// switch (name) {
//   case "Alice":
//     greeting = "Hello, Alice!";
//     break;
//   case "The White Rabbit":
//     greeting = "Don't be late, White Rabbit";
//     break;
//   case "The Mad Hatter":
//     greeting = "Welcome to the tea party, Mad Hatter";
//     break;
//   case "The Queen of Hearts":
//     greeting = "Please don't chop off my head!";
//     break;
//   default:
//     greeting = "Whoooo are you?";
// }

// console.log(greeting);

// const name = "Alice";
// let greeting;

// switch (name) {
//   case "Alice":
//     greeting = "Hello, Alice!";
//     break;
//   case "The White Rabbit":
//     greeting = "Don't be late, White Rabbit";
//     break;
//   case "The Mad Hatter":
//     greeting = "Welcome to the tea party, Mad Hatter";
//     break;
//   case "The Queen of Hearts":
//     greeting = "Please don't chop off my head!";
//     break;
//   default:
//     greeting = "Whoooo are you?";
// }

// console.log(greeting);

// const name = "hero";
// let characterType;

// switch (name) {
//   case "Sleepy":
//   case "Sneezy":
//   case "Happy":
//   case "Grumpy":
//   case "Bashful":
//   case "Dopey":
//   case "Doc":
//     characterType = "dwarf";
//     break;
//   case "Handsome Prince":
//     characterType = "hero";
//     break;
//   case "Evil Queen":
//     characterType = "villain";
//     break;
//   case "Snow White":
//     characterType = "heroine";
//     break;
//   default:
//     characterType = "minor character";
// }

// console.log(characterType);

// const name = "Doc";
// let characterType;

// switch (name) {
//   case "Sleepy":
//   case "Sneezy":
//   case "Happy":
//   case "Grumpy":
//   case "Bashful":
//   case "Dopey":
//   case "Doc":
//     characterType = "dwarf";

//   case "Handsome Prince":
//     characterType = "hero";

//   case "Evil Queen":
//     characterType = "villain";

//   case "Snow White":
//     characterType = "heroine";

//   default:
//     characterType = "minor character";
// }

// console.log(characterType); //minor character

// const age = 12;
// let isAdult, canWork, canEnlist, canDrink;

// switch (true) {
//   case age >= 21:
//     canDrink = true;
//   case age >= 18:
//     isAdult = true;
//     canEnlist = true;
//   case age >= 16:
//     canWork = true;
// }

// console.log(isAdult, canWork, canEnlist, canDrink);

// const name = "Byron the Poodle";
// console.log("Hello,", name);

// const age = 20;

// let isAdult=false, canWork=false, canEnlist=false, canDrink=false;

// if (age >= 21) {
//   canWork = true;
//   canEnlist = true;
//   isAdult = true;
//   canDrink = true;
// } else if (age >= 18) {
//   canWork = true;
//   canEnlist = true;
//   isAdult = true;
// } else if (age >= 16) {
//   canWork = true;
// }

// console.log("canWork:", canWork);
// console.log("canEnlist:", canEnlist);
// console.log("isAdult:", isAdult);
// console.log("canDrink:", canDrink);

// console.log(`Age: ${age}, Can work: ${canWork}, Can enlist: ${canEnlist}, Is a legal adult: ${isAdult}, Can drink: ${canDrink}`);

//  console.log(x);

//  while (true) {
//   console.log("say this forever...");
// }

// let count = 2;

// while (count < 20) {
//   console.log(`I am ${count} and continuiing to count.`);
//   count = count+1
//  }

//  console.log(count);

//  let count = 0; 
// while (count < 3) { 
//   console.log(`I am the ${count}, I love to count!`); 
//   count++; 
// }

// console.log(count);

// do { 
//   console.log(`I will execute once`); 
// } while (false);

// const name = "Joe";
// const height = 74;
// const message = `${name} is ${height} inches tall`;

// module.exports = {name, height, message};

// function sayHello() {
//   console.log('Hello!');
// }

// sayHello(); //Hello

// function sayHelloToIsabel() {
//   console.log("Hello, Isabel!");
// }

// function sayHelloToSofia() {
//   console.log("Hello, Sofia!");
// }

// function sayHelloToBrendan() {
//   console.log("Hello, Brendan!");
// }

// sayHelloToIsabel();
// sayHelloToSofia();
// sayHelloToBrendan();

// function doSomething(thing) {
//   console.log(thing);
// }

// doSomething('I am doing anything');

// function sayHelloTo(firstName) {
//   console.log(`Hello, ${firstName}!`);
// }

// sayHelloTo('Isabel'); // "Hello, Isabel!"
// sayHelloTo("Jane"); // "Hello, Jane!"
// sayHelloTo("R2-D2"); // "Hello, R2-D2!"
// sayHelloTo(1); // "Hello, 1!"

// console.log(firstName);

// function say(greeting, firstName) {
//   console.log(`${greeting}, ${firstName}!`);
// }

// say("1st Greeting", "First Name");

// function add(x, y) {
//   return x + y;
// }

// console.log(add(4, 7));

// function say(greeting, firstName) {
//   return `${greeting}, ${firstName}!`
// }

// // function say(greeting, firstName) {
// //   console.log(`${greeting}, ${firstName}!`);
// // }

// say("hi", "Hello");

// console.log(say("Hello", "Sofia"));

// function add(x, y) {
//   x + y;
// }

// console.log(add(1,2)); //undefined

// function add(x, y) {
//  return x + y;
// };

// console.log(add(1,2)); // 3

// function say(greeting, firstName) {
//   return `${greeting}, ${firstName}!`;
//   console.log('I was called!');
// }

// console.log(say("Hi", "Hello"));

// function say(greeting, firstName) {
//   console.log('I was called!');
//   return `${greeting}, ${firstName}!`;
// }

// console.log(say("Hi", "Hello"));

// function sayHelloTo(firstName = "User") {
//   console.log(`Hello, ${firstName}!`);
// }


// sayHelloTo("Test")

// console.log(parseInt('2.88', 10)); //2

// console.log(parseFloat('80.123999')); //80.123999

// console.log("String".toUpperCase());

// console.log("String".toLowerCase());

// function add(x, y){
//   return x + y
// }

// console.log(add(4,5));

// function add(x,y){
//   return x+y
//   }
  
//   function subtract(x,y){
//   return x-y
//   }
  
//   function multiply(x,y){
//   return x*y
//   }
  
//   function divide(x,y){
//   return x/y
//   }
  
//   function increment(x){
//   return x+1
//   }
  
//   function decrement(x){
//   return x-1
//   }
  
//   function makeInt(a){
//   return parseInt(a,10)
//   }
  
//   function preserveDecimal(x){
//   return parseFloat(x,2)
//   }

//   console.log(makeInt(4.004,10));
//   console.log(preserveDecimal(3.9807, 2));

// let add = (parameter1, parameter2) => parameter1 + parameter2

// console.log(add(2, 3)) //5

// const nums = [1,2,3];
// const squares = nums.map(x => x ** 2); //=> [1,4,9]
// const doubles = nums.map(x => x * 2); //=> [2,4,6]

// console.log(squares);//[ 1, 4, 9 ]
// console.log(doubles);//[ 2, 4, 6 ]

// function clean(item) {
//   console.log(`I just cleaned a ${item}`)
// }

// let nails = ["rusty nail small", "rusty nail big", "bent nail", "clean nail"]

// for (let i = 0; i < nails.length; i++) {
//   clean(nails[i])
// }

// let planks = ["splintered plank", "straight plank", "bent plank"]

// for (let i = 0; i < planks.length; i++) {
//   clean(planks[i])
// }

// console.log('done!')

// I just cleaned a rusty nail small
// I just cleaned a rusty nail big
// I just cleaned a bent nail
// I just cleaned a clean nail
// I just cleaned a splintered plank
// I just cleaned a straight plank
// I just cleaned a bent plank
// done!

// function doTo5(anything) {
//   return anything('Any String')
// }

// function divide10ByN(n) {
//   return 10 / n
// }

// function appendToHello(s) {
//   return `Hello, ${s}!`
// }

// function appendToHello(s) {
//   return `Hello, ${s}!`
// }

// console.log(doTo5(appendToHello));

// console.log(appendToHello(doTo5));

// console.log(doTo5(divide10ByN));

// console.log(doTo5(anything(5)));

// function myDisplayer(some) {
//   return some(5)
// }

// function myFirst() {
//   myDisplayer("Hello");
// }

// function mySecond() {
//   myDisplayer("Goodbye");
// }

// console.log(myFirst());
// console.log(mySecond());

// function Monday() {
//   console.log('Go for a five-mile run');
//   console.log('Pump iron');
// }



// function Tuesday() {
//   console.log('Go for a five-mile run');
//   console.log('Swim 40 laps');
// }

// function Wednesday() {
//   console.log('Go for a five-mile run');
//   console.log('Go for a five-mile run');
// }

// function Thursday() {
//   console.log('Go for a five-mile run');
//   console.log('Pump iron');
// }

// function Friday() {
//   console.log('Go for a five-mile run');
//   console.log('Swim 40 laps');
// }

// function runFiveMiles() {
//   console.log('Go for a five-mile run');
// }

// function liftWeights() {
//   console.log('Pump iron');
// }

// function swimFortyLaps() {
//   console.log('Swim 40 laps');


// function Monday() {
//   console.log(runFiveMiles());
//   console.log(liftWeights());
// }

// function exerciseRoutine(postRunActivity) {
//   runFiveMiles();
//   postRunActivity();
// }

// function Monday() {
//   exerciseRoutine(liftWeights);
// }

// console.log(Monday());

// console.log(myFunction(5));

// function myFunction(y){
//   return y * y
// }



// function myFunction(y) {
//   return y * y
// }

// function myFunction(x, y) {
//   if (y === undefined) {
//     y = 2;
//   }
//  return x * y
// }

// console.log(myFunction(3));

// function myFunction(x, y = 10) {
//   return x + y;
// }
// console.log(myFunction(5));

// function sum(...args) {
//   let sum = 0;
//   for (let arg of args) sum += arg;
//   return sum;
// }

// let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

// console.log(x);

// x = sumAll(1, 123, 500, 115, 44, 88);

// function sumAll() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// console.log(sumAll(x));

// function exerciseDog(dogName, dogBreed) {
//   console.log(`Wake ${dogName} the ${dogBreed}`);
//   console.log(`Leash ${dogName} the ${dogBreed}`);
//   console.log(`Walk to the park ${dogName} the ${dogBreed}`);
//   console.log(`Throw the fribsee for ${dogName} the ${dogBreed}`);
//   console.log(`Walk home with ${dogName} the ${dogBreed}`);
//   console.log(`Unleash ${dogName} the ${dogBreed}`);
// }

// exerciseDog("Byron", "Poodle")

// exerciseDog("Jojo", "Mutt")

// exerciseDog("Emmeline", "Brendon")

let weatherToday = "Rainy";

function exerciseDog(dogName, dogBreed) {
  if (weatherToday === "Rainy") {
    return `${dogName} did not exercise due to rain`;
  }
  console.log(`Wake ${dogName} the ${dogBreed}`);
  console.log(`Leash ${dogName} the ${dogBreed}`);
  console.log(`Walk to the park ${dogName} the ${dogBreed}`);
  console.log(`Throw the fribsee for ${dogName} the ${dogBreed}`);
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `${dogName} is happy and tired!`
}

let result = exerciseDog("Byron", "poodle");
console.log(result); // => "Byron did not exercise due to rain"