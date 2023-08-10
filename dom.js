

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// var title = document.getElementById('title');
// headerTitle.style.borderBottom='solid 3px #000';
// title.style.color = '#008000';
// title.style.fontWeight='900';
 
var items = document.getElementsByClassName('list-group-item');
console.log(items);

for(let i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}
items[2].style.backgroundColor='#00b300';
