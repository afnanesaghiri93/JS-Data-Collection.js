////==========create an array of strings, called nobleGases====================/////
//Example
let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn'];
nobleGases[0]; // 'He'
nobleGases[1]; // 'Ne'
nobleGases[2]; // 'Ar'
nobleGases[3]; // 'Kr'
nobleGases[4]; // 'Xn'
nobleGases[5]; // 'Rn'
console.log(nobleGases); // output :['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn']
///length property // nobleGases.length; // 6


// ===================n array inside another array is called a nested array==================//
//Example
let elements = [[['H', 'Li', 'Na'], ['Be', 'Mg']], [['B', 'Al'], ['C', 'Si']]];
console.log(elements[0]); //output : [['H', 'Li', 'Na'], ['Be', 'Mg']]
console.log(elements[0][0]); //output : ['H', 'Li', 'Na']
console.log(elements[0][0][0]); // output :'H'

//=============================Sparse Arrays================================================//
//Example
let firstGroup = ['H', 'Li', 'Na', , 'K', 'Rb', 'Cs'];
console.log(firstGroup);//output : ['H', 'Li', 'Na', empty, 'K', 'Rb', 'Cs']
// Increasing the length property
firstGroup.length = 11;
console.log(firstGroup);//output : ['H', 'Li', 'Na', empty, 'K', 'Rb', 'Cs', empty × 4]

// Assigning an element to an index greater than the length
firstGroup[15] = 'Fr';
console.log(firstGroup);// output :['H', 'Li', 'Na', empty, 'K', 'Rb', 'Cs', empty × 8, 'Fr']

// =================the comparison takes place considering their references – and not their actual values.=========//
let doughl1 = ['flour', 'water', 'yeast', 'salt'];
let doughl2 = ['flour', 'water', 'yeast', 'salt'];

//dough1 === dough2; // output :false
//[] === []; // output :false
Array() === Array(); // output :false

//===================The only way to make this comparison evaluate to true is to make the two arrays point to the same reference===========///
let dought1 = ['flour', 'water', 'yeast', 'salt'];
let dought2 = dough1;

dough1 === dough2; // output :true 

//==============================Compare two Arrays===================//
//Example
const compareArr = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true
};
//==============================Compare two Arrays===================//
//Example
let dough1 = ['flour', 'water', 'yeast', 'salt'];
let dough2 = ['flour', 'water', 'yeast', 'salt'];
compareArr(dough1, dough2); // output : true

///============================Array are Nested==========================///
//Example
let metal1 = [['Li', 'Na', 'K'], ['Be', 'Mg', 'Ca']];
let metal2 = [['Li', 'Na', 'K'], ['Be', 'Mg', 'Ca']];
const compareNested = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false
    } for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            if (arr1[i][j] !== arr2[i][j]) {
                return false
            }
        }
    }
    return true
};

compareNested(metal1, metal2); // output :true

//==============================Compare two arrays of objects===================//
//Example
let albums1 = [
    { artist: 'Frank Zappa', title: 'Over-Nite Sensation', year: 1973 },
    { artist: 'Frank Zappa', title: 'Apostrophe', year: 1974 },
    { artist: 'Frank Zappa', title: 'One Size Fits All', year: 1975 }
];
let albums2 = [
    { artist: 'Frank Zappa', title: 'Over-Nite Sensation', year: 1973 },
    { artist: 'Frank Zappa', title: 'Apostrophe', year: 1974 },
    { artist: 'Frank Zappa', title: 'One Size Fits All', year: undefined },
];
const compareArrObj = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let i = 0; i < arr1.length; i++) {
        if (Object.keys(arr1[i]).length !== Object.keys(arr2[i]).length) {
            return false
        }
        for (let prop in arr1[i]) {
            if (arr1[i][prop] !== arr2[i][prop]) {
                return false
            }
        }
    }
    return true
};
compareArrObj(albums1, albums2); // output : false

albums2[2]['year'] = 1975;
//==========>the year value in the third object of albums2 is different. If we change it, the result will be true<========/
compareArrObj(albums1, albums2); // true            



//================Use The Spread Operatort==============//
//Example
let alkali = ['Li', 'Na', 'K'];
let alkEarth = ['Be', 'Mg', 'Ca'];

// Merging two arrays with the spread operator
let metals = [...alkali, ...alkEarth];
console.log(metals); // ['Li', 'Na', 'K', 'Be', 'Mg', 'Ca']
// Copying an array with the spread operator
let metalsCopy = [...metals];
console.log(metalsCopy); // ['Li', 'Na', 'K', 'Be', 'Mg', 'Ca']

//================= Use the Rest Parameter==============//
//Example
function f1(first, second, third, ...others) {
	console.log(first);
    console.log(second);
    console.log(third);
    console.log(others);
};

f1('He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn'); // He, Ne, Ar, ['Kr', 'Xn', 'Rn']
// the rest parameter provides a way to easily access the arguments passed to a function in array form, instead of using the arguments object:
function f2(...args) {
	console.log(args);
    // you can use an iterative method on the args array
};

f2('He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn');
// ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn']


//==================Destructuring Assignment====================//
//Example
let nobleGases0 = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];
let [firstRow, secondRow,,FourthRow] = nobleGases;
console.log(firstRow); // 'He'
console.log(secondRow); // 'Ne'
console.log(FourthRow); // 'Kr'
// 'Ar' is skipped because of the additional comma

//=================Common Array Methods in JS==============//

///1- the push() Method :Example

let nobleGases1 = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];
nobleGases[5] = 'Rn';
console.log(nobleGases1); // ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn']

//======== OR  You can obtain the same result using the push() method  ======/
let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];
nobleGases.push('Rn'); // 6
// push() returns the length of the modified array
console.log(nobleGases1); // ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn']

//=====You can append multiple elements with push()===========//
let halogens = ['F', 'Cl'];
console.log(halogens); // ['F', 'Cl']
halogens.push('Br', 'I', 'At'); // 5
// push() returns the length of the modified array
console.log(halogens); // ['F', 'Cl', 'Br', 'I', 'At']


///2- the unshift() Method :Example

let halogens1= ['F', 'Cl'];
console.log(halogens1); // ['F', 'Cl']
halogens.unshift('Br', 'I', 'At'); // 5
// unshift() returns the length of the modified array
console.log(halogens1); // ['Br', 'I', 'At', 'F', 'Cl']

// 3- the pop() Method :Example

let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn'];
console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn']
nobleGases.pop(); // 'Rn'
// pop() returns the removed element
console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn']

// 4- the shift() Method :Example

let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn'];
console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn']
nobleGases.shift(); // 'He'
// shift() returns the removed element
console.log(nobleGases); // ['Ne', 'Ar', 'Kr', 'Xn', 'Rn']

// 5- the splice() Method :Example
let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn'];
console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn']
nobleGases.splice(1, 3); // ['Ne', 'Ar', 'Kr']
// splice() returns an array with removed elements
console.log(nobleGases); // ['He', 'Xn', 'Rn']

// To remove any elements from the array, you can simply use zero as the second argument/
let nobleGases = ['He', 'Ne', 'Rn'];
console.log(nobleGases); // ['He', 'Ne', 'Rn']

nobleGases.splice(2, 0, 'Ar', 'Kr', 'Xn'); // []
// splice() returns an array with removed elements
console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn']

//==================== How to Combine Arrays===========/
// 1-  the concat() Method:Example

let alkaliii = ['Li', 'Na', 'K'];
let moreAlkaliii = ['Rb', 'Cs', 'Fr'];
let alkEarthhh = ['Be', 'Mg', 'Ca'];
alkali.concat(moreAlkali);
// ['Li', 'Na', 'K', 'Rb', 'Cs', 'Fr']
alkali.concat(moreAlkali, alkEarth);
// ['Li', 'Na', 'K', 'Rb', 'Cs', 'Fr', 'Be', 'Mg', 'Ca']

// 2-  the push() Method & the Spread Operator :Example

let alkalii = ['Li', 'Na', 'K'];
let moreAlkalii = ['Rb', 'Cs', 'Fr'];
let alkEarthh = ['Be', 'Mg', 'Ca'];
alkali.push(...moreAlkali); // 6
console.log(alkali); // ['Li', 'Na', 'K', 'Rb', 'Cs', 'Fr']
 

//========== How to Convert an Array into a String =========/
// 1-  the toString() & join() Methods :
// Example 1:
let animals = ['pig', 'dog', 'sheep'];
animals.toString(); // 'pig,dog,sheep'
animals.join(', '); // 'pig, dog, sheep'
animals.join(' '); // 'pig dog sheep'
animals.join(' * '); // 'pig * dog * sheep'
// Example 2:
let arr = [1, 'two', null, undefined, true, {}];
arr.toString(); // '1,two,,,true,[object Object]'
arr.join(); // '1,two,,,true,[object Object]'


//=========== How to Use the JSON.stringify() Method ==========//
// Example:
let albums = [
    {artist: 'Frank Zappa', title: 'Apostrophe', year: 1974},
    {artist: 'Frank Zappa', title: 'One Size Fits All', year: 1975}
];
JSON.stringify(albums);
//'[{"artist":"Frank Zappa","title":"Apostrophe","year":1974},{"artist":"Frank Zappa","title":"One Size Fits All","year":1975}]'

//=============== How to Compare Arrays===================//
// Example:
let a = [1, null, 3];
let b = [1, undefined, 3];
a[1] === b[1]; // false
JSON.stringify(a) === JSON.stringify(b); // true

//===========How to Use the every() Method ==========//
let a1= [1, null, 3];
let b2 = [1, undefined, 3];
compareEvery(a1,b2); // false

//=========== How to Copy an Array ==========//
// the slice() Method : // Example1:
let doug = ['flour', 'water', 'yeast', 'salt'];
let dougCopy = dough.slice();
console.log(dougCopy); // ['flour', 'water', 'yeast', 'salt']

// Example2:
let albumss = [
    {artist: 'Frank Zappa', title: 'Apostrophe'},
    {artist: 'Frank Zappa', title: 'One Size Fits All'}
];
let albumsaCopy = albumss.slice();
albumssCopy[1] = {artist: 'Captain Beefheart', title: 'Safe as Milk'};
console.log(albumssCopy);
// [
//  {artist: 'Frank Zappa', title: 'Apostrophe'},
//  {artist: 'Captain Beefheart', title: 'Safe as Milk'}
// ];
console.log(albumss);
// [
//  {artist: 'Frank Zappa', title: 'Apostrophe'},
//  {artist: 'Frank Zappa', title: 'Absolutely Free'}
// ];

//===========How to Use the map() Method ==========//
// Example 1:
let albumsss= [
    {artist: 'Frank Zappa', title: 'Apostrophe'},
    {artist: 'Frank Zappa', title: 'One Size Fits All'}
];
let mapAlbumsss = albumsss.map(element => element);
console.log(mapAlbumsss);
// [
//  {artist: 'Frank Zappa', title: 'Apostrophe'},
//  {artist: 'Frank Zappa', title: 'One Size Fits All'}
// ];



//================= How to Search Inside an Array ===================//
// 1- The includes() Method :
let dMinor = ['D', 'E', 'F', 'G', 'A', 'B♭', 'C'];
dMinor.includes('E'); // true
dMinor.includes('E', 2); // false
// 2- The find() & findLast() Methods :
let animals1 = [
    {no: 1, track: 'Pigs on the Wing (Part One)'},
    {no: 2, track: 'Dogs'},
    {no: 3, track: 'Pigs (Three Different Ones)'},
    {no: 4, track: 'Sheep'},
    {no: 5, track: 'Pigs on the Wing (Part Two)'}
];
animals1.find(el => el['track'].includes('Pigs'));
// {no: 1, track: 'Pigs on the Wing (Part One)'}
animals1.findLast(el => el['track'].includes('Pigs'));
// {no: 5, track: 'Pigs on the Wing (Part Two)'}
animals1.find(el => el['track'].includes('Horses'));
// undefined
//3-  the findIndex() & findLastIndex() Methods :
let animalsss = [
    {no: 1, track: 'Pigs on the Wing (Part One)'},
    {no: 2, track: 'Dogs'},
    {no: 3, track: 'Pigs (Three Different Ones)'},
    {no: 4, track: 'Sheep'},
    {no: 5, track: 'Pigs on the Wing (Part Two)'}
];
animalsss.findIndex(el => el['track'].includes('Pigs')); // 0
animalsss.findLastIndex(el => el['track'].includes('Pigs')); // 4
animalsss.findIndex(el => el['track'].includes('Horses')); // -1
console.log(animalsss);
//===================== How to Check if Array Elements Meet a Condition================///
// 1-  the every() & some() Methods :// Example1:
let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];
nobleGases.every(el => typeof el == 'string'); // true
nobleGases.some(el => el == 'Ar'); // true
nobleGases.some(el => el == 'Rn'); // false
// 2-  the filter() Method :// Example1:
let animalss = [
    {no: 1, track: 'Pigs on the Wing (Part One)'},
    {no: 2, track: 'Dogs'},
    {no: 3, track: 'Pigs (Three Different Ones)'},
    {no: 4, track: 'Sheep'},
    {no: 5, track: 'Pigs on the Wing (Part Two)'}
];
animalss.filter(el => el['track'].includes('Pigs'));
console.log(animalss);
// [
// {no: 1, track: 'Pigs on the Wing (Part One)'},
// {no: 3, track: 'Pigs (Three Different Ones)'},
// {no: 5, track: 'Pigs on the Wing (Part Two)'}
// ]

//============= How to Sort an Array ===============//
// 1- the sort() Method : // Example1:
let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn'];

// sorting in ascending order
nobleGases.sort((a, b) => {
   return a === b ? 0 : a > b ? 1 : -1; 
}); 
// ['Ar', 'He', 'Kr', 'Ne', 'Rn', 'Xn']

// sorting in descending order
nobleGases.sort((a, b) => {
   return a === b ? 0 : a < b ? 1 : -1; 
});
// ['Xn', 'Rn', 'Ne', 'Kr', 'He', 'Ar']

//============= How to Perform an Operation on Every Array Element ============//
//1- the map() Method : Examole:
let animals2 = [
    {no: 1, track: 'Pigs on the Wing (Part One)'},
    {no: 2, track: 'Dogs'},
    {no: 3, track: 'Pigs (Three Different Ones)'},
    {no: 4, track: 'Sheep'},
    {no: 5, track: 'Pigs on the Wing (Part Two)'}
];
let tracks = animals2.map(el => el['track']);
console.log(tracks); // ['Pigs on the Wing (Part One)', 'Dogs', 'Pigs (Three Different Ones)', 'Sheep', 'Pigs on the Wing (Part Two)']

//2-  the forEach() Method : Example:
let animals20 = [
    {no: 1, track: 'Pigs on the Wing (Part One)'},
    {no: 2, track: 'Dogs'},
    {no: 3, track: 'Pigs (Three Different Ones)'},
    {no: 4, track: 'Sheep'},
    {no: 5, track: 'Pigs on the Wing (Part Two)'}
];

animals.forEach(el => delete el['no']); // it returns undefined

console.log(animals20); 
// [
//   {track: 'Pigs on the Wing (Part One)'},
//   {track: 'Dogs'},
//   {track: 'Pigs (Three Different Ones)'},
//   {track: 'Sheep'},
//   {track: 'Pigs on the Wing (Part Two)'}
// ]

// 3- the reduce() Method :
let animals10 = [
    {no: 1, track: 'Pigs on the Wing (Part One)'},
    {no: 2, track: 'Dogs'},
    {no: 3, track: 'Pigs (Three Different Ones)'},
    {no: 4, track: 'Sheep'},
    {no: 5, track: 'Pigs on the Wing (Part Two)'}
];

let countPigs = animals10.reduce((count, el) => {
	return el['track'].includes('Pigs') ? count + 1 : count
	}, 0);

console.log(countPigs); // 3