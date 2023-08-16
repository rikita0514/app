var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit',addItem);

//delete event
itemList.addEventListener('click',removeItem);

//filter event
filter.addEventListener('keyup', filterItems)

//Add item
function addItem(e){
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li');
    //add class
    li.className = 'list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create del button element
    var deletebtn = document.createElement('button');
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('X'));
    li.appendChild(deletebtn);

    var editbtn = document.createElement('button');
    editbtn.className = 'btn btn-default btn-outline-secondary btn-sm float-right btn-success';
    editbtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editbtn);


    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
   //converts to lowercase
   var text = e.target.value.toLowerCase();
   //get the items in the item list
   var items = itemList.getElementsByTagName('li'); 
   //convert the items into an array
   Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display='block';
    } else{
        item.style.display='none';
    }
   });
}

