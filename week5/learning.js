/*const firstDiv=document.querySelector('first');
  const secondDiv = document.querySelector('.blue');
  const boxOfDivs = document.querySelectorAll('div');

console.log(firstDiv.textContent);
console.log(secondDiv.textContent);
console.log(boxOfDivs.textContent);//

/*const logTextContent = Element => 
console.log(element.textContent);

logTextContent(firstDiv);
logTextContent(secondDiv);

boxOfDivs.forEach(logTextContent);*/

//HTML:
//<div id="myElement">Hello, DOM</div>

//const elementById = document.getElementById('myElement');
//console.log(elementById.textContent);//Outputs Hello DOM!

const title='Best reads of 2019';
const author='Wills';
const likes=10;

result = ` The blog called ${title} by ${author} has ${likes} likes `;
console.log(result);