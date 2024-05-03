const colorsArray=["blue","green", "red",["yellow","black"] ];

const mixedArray=[true, false, "yes", "no", 5];

console.log(colorsArray.length, mixedArray.length);

console.log(colorsArray);

/*colorsArray.unshift('brown');//adds the array element in the index 0
colorsArray.push('brown'); //adds the array element in the index at the end
const color=colorsArray[3][1];
console.log(color);*/

/*const randomNest=[1,2,3,['puddle', 'pomeria']];

const dogNames=['rotweiler','jack','dobberman'];

const clonedRandom = [...randomNest[3]];
console.log(clonedRandom);

const cloneBoth=[...clonedRandom, ...dogNames];
console.log(cloneBoth.length);*/

const famNames=['Ariel', 'Bina', 'christin', 'sweety'];
const addFamEx = famNames.map((element,index) => {
    return element+'!'; //output is namewith!
})
console.log(addFamEx);

const famGreaterSix = famNames.filter((element,index) =>    
    {return element.length>6;
    })
    console.log(famGreaterSix);// output is Christin

const famUsingReduce = famNames.reduce((accumulator, element) => {
    return accumulator = accumulator + element.length;
},0)
console.log(famUsingReduce);



