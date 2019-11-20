//("js Linked");

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
  var ages = [32, 33, 16, 40];

  function checkAdult(age) {
    return age >= 18;
  }
  
  function myFunction() {
    document.getElementById("demo").innerHTML = ages.filter(checkAdult);
  }
  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's
// The filter() method creates a new array with all the elements that pass test implemented by the provided fuction


//   const fifteen = inventors.filter(function(inventor){
//       if(inventor.year >= 1500 && inventor.year < 1600){
//           return true;
//       }
//   });

// Replaced the above code with arrow function.
  const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
  //return true;
  console.table(fifteen);
  //create JSON string from a javaScript object by using stringify() method.
  var obj = JSON.stringify(fifteen);
 // JSON.parse(JSON.stringify(userData))
 var obj1 = JSON.stringify(inventors);
 document.getElementById("demo1").innerHTML = obj1;

 function filterFunction() {
    document.getElementById("demo2").innerHTML = obj;
  }



  // Array.prototype.map()
  // 2. Give us an array of the inventors' first and last names
//const inventorsNames = inventors.map(names => names.first + ' '+ names.last);
const inventorsNames = inventors.map(names => `${names.first}  ${names.last}`);
var inventorsNamesString = JSON.stringify(inventorsNames);
function mapFunction() {
    document.getElementById("map").innerHTML = inventorsNamesString;
  }

console.table(inventorsNames);
  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest
// const ordered = inventors.sort(function(a, b){
//     if(a.year > b.year) {
//         return 1;

//     } else {
//         return -1;
//     }
// });
const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1)

var orderedString = JSON.stringify(ordered);
function sortFunction() {
    document.getElementById("sort").innerHTML = orderedString;
  }

console.table(ordered);
  // Array.prototype.reduce()
  // 4. How many years did all the inventors live?
const totalYears = inventors.reduce((total, inventor) => {
    //console.log(inventor.passed - inventor.year);
    //console.log(total);
    return total + (inventor.passed - inventor.year);
},0);

console.log(totalYears);
  // 5. Sort the inventors by years lived
  const oldest = inventors.sort(function(a,b){
      const lastGuy = a.passed - a.year;
      const nextGuy = b.passed - b.year;
      return lastGuy > nextGuy ? -1 : 1;
    //   if(lastGuy > nextGuy) {
    //       return -1;
    //   } else {
    //       return 1;
    //   }
  });
  console.log(oldest);

  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


  // 7. sort Exercise
  // Sort the people alphabetically by last name

  // 8. Reduce Exercise
  // Sum up the instances of each of these
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
