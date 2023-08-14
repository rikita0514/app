

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// var title = document.getElementById('title');
// headerTitle.style.borderBottom='solid 3px #000';
// title.style.color = '#008000';
// title.style.fontWeight='900';
 
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);

// for(let i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
// }
// items[2].style.backgroundColor='#00b300';
// var li = document.getElementsByTagName('li');
// console.log(li);

// for(let i=0;i<li.length;i++){
//     li[i].style.fontWeight='bold';
//     li[i].style.backgroundColor='lightgrey';
// }
// li[2].style.backgroundColor='#00b300';
// var header= document.querySelector('#main-header');
// header.style.borderBottom= 'solid 4px black';

// var input = document.querySelector('input');
// input.value='Enter Your Item';

// var submit=document.querySelector('input[type="submit"]');
// submit.value='Add';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display='none';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// for(let i=0; i<odd.length;i++){
//     odd[i].style.backgroundColor='#5cd65c';
// }

// var second= document.querySelector('.list-group-item:nth-child(2)');
// second.style.color='green';
// second.style.fontWeight='bold';

//Traversing the DOM

var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = 'lightgrey';
// console.log(itemList.parentNode.parentNode.parentNode);

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'lightgrey';
// console.log(itemList.parentElement);

//console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor = '#ffff66';

// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);

//itemList.firstElementChild.textContent = 'Hello';

//console.log(itemList.lastChild);
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = 'Done';

//console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color = 'green';

var newDiv = document.createElement('div');

//To add .class
newDiv.className = 'hello';

//To add #id
newDiv.id = 'hello1';

//Add attribute
newDiv.setAttribute('title', 'Hello Div');

//create a text node
var newDivText = document.createTextNode('Hello World');

//Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '20px';

container.insertBefore(newDiv, h1);


//To add Hello before Item I
var nDiv = document.createElement('div');

//To add .class
nDiv.className = 'hello1';


//Add attribute
nDiv.setAttribute('title', 'Hello Div1');

//create a text node
var nDivText = document.createTextNode('Hello World');

//Add text to div
nDiv.appendChild(nDivText);

var container1 = document.querySelector('#items');
var h2 = document.querySelector('.list-group-item');

console.log(nDiv);

container1.insertBefore(nDiv, h2 );
