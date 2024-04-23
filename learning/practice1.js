//template string 
/*const title='best of 2019';
const author='Willis';
const likes=10;*/

//result=`The book called ${title} by ${author} has ${likes} likes`;//result has BACKTICKS to display the whole result
/*result = `The book`;//output is 8 and space is also a string length
console.log(result.length);
console.log(likes.length);*/

//Array
/*const out=[1,3,5,9];
console.log(out.length);//output is the array length as 4*/

//create html template, html = content in backticks
/*let html= `
<h2> ${title}</h2>
<p>By ${author}</p>
<span> The book has ${likes} likes</span> `
console.log(html);*/

//let ninjas= ["Shyan","ryu","chun li"];
//result= ninjas.join(' ');//join is a method, joins all the string values with a space in between
//result = ninjas.concat();//concat is a method, shows array of string and clickon that shows all the string values
//result= ninjas.push(1); console.log(result);// shows the total length of the string after adding the number 1
//Destructive method
//let result=ninjas.push(1); //console.log(ninjas); //shows the array length and values of 4 and 3 string values and number 1
//result=ninjas.pop(); console.log(ninjas); //console displays all string values of ninjas and pops out number 1
//let age; console.log(age , age+3 , `My age is ${age}`); // age is undefined,output:  'My age is undefined'
//let age=null; console.log(age, age+3, `My age is ${age}`);//output;null 3 'My age is null'

//BOOLEANS & COMPARISONS
//console.log(true, false, 'true', 'false'); //output: true false 'true' 'false' (we can differentiate the real true and flse to the string values
/*let email='luigi@gmail.com';
result = email.includes('@');
console.log(result);*///display: true as the email includes @

//COMPARISON OPERATORS for numbers
//let age=25;
//console.log(age == 25); //operator == means, Is age equal to 25? dislay: true
//console.log(age != 25); //operator != means, is age not equal to 25? display:false
//console.log(age < 25); //operator <, is age less than 25? display: false
//console.log(age > 25); //operator >, is age greater than 25?display: false
//console.log(age <= 25); //operator <=, is age less OR equal to 25? display: true as one of the operator is =
//console.log(age >= 25); //operator >=, is age greater than OR equal 25? display: true as one of the operators is = 25

//COMPARISON OPERATORS for string. These operators are loose comparison and we need a better comparisn in real time
/*let name='shaun';

console.log(name=='shaun');//True
console.log(name == 'Shaun');//False
console.log(name <= 'shaun');//true
console.log(name >= 'shaun');//true
console.log(name == 'Chari');//false
console.log(name <= 'Chari');//false*/

//COMPARISON between number and string (loose comparison)

/*let age=25;
console.log(age == 25);//true
console.log(age == '25');//true as it is only looking at the values and not differentiating number to string
console.log(age != 25);//false
console.log8(age != '25');//false, string looks as 25*/

//STRICT COMPARISON for number and string
/*let age = 25;
console.log(age === 25); //Is the age value and type equal to number 25? display;true
console.log(age === '25');//false, string value and type is not number 25
console.log(age !== 25); //false
console.log(age !== '25'); //true as the number is not the same as string*/
//console.log(age <=='25'); //<==does not exist
//console.log(age >== '25');//>== does not exist

let score='100';
console.log(score + 1); //display: 1001 - it concatinates'
console.log(typeof(score));

/*score = Number(100);// converts string 100 to number 100
console.log(score+1); //display:101
console.log(typeof(score));*/

//let result=Number('hello');//display:NaN (Not a Number)
//let result=Number('100'); console.log(result); //display:100. JScript takes 100 string as string value 100

/*let result=String(50); console.log(result);//diplay:50. we can verify the type by using method
console.log(result, typeof(50));//diplay:50. we can verify the type by using method typeof(50)*/

/*let result=Boolean(-50);
console.log(result);//Boolean value of 100 is true, infact all positive and negative numbers are true. zero is false*/

//let result=Boolean('100'); console.log(result); //display:true. All strings are true EXCEPT space ' '
//let result=Boolean(''); console.log(result);//display:false. string of space ' ' is always false.

//So far all the actions are explicit. The only implicit is the strict comparison that JScript does behind the screen
/*function myFunction() {
    alert("Hello World!");
  }
myFunction();///diplay: pop-up 'Hello world' on the browser*/


/*function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";}*///When placed here, I don't have to click to get a changed paragrah

/*const names=[ 'Ariel', 'Bina', 'Christin' ];
    for(let i=0; i= names.length; i++) {
        console.log(i);
      }*/


