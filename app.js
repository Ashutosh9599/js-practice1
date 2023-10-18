// //ElementsByClassName
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello';
// items[2].style.backgroundColor = 'green';

// for (let i = 0; i < items.length; i++) {
//     items[i].style.fontWeight = 'bold';
// }

// //ElementsByTagName
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello';
// li[2].style.backgroundColor = 'green';

// for (let i = 0; i < li.length; i++) {
//     li[i].style.fontWeight = 'bold';
// }

// //querySelector
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = 'none';

// //querySelectorforAll
// var secondItem = document.querySelectorAll('li:nth-child(2)')[0];
// secondItem.style.color = 'green'; 

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for (let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = 'green';
// }

// //TRAVERSING THE DOM
// var itemList = document.querySelector('#items');

// //parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// //parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// //childeNodes
//console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// //FirstChild
// console.log(itemList.firstChild);
// //FirstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// //lastChild
// console.log(itemList.lastChild);
//lastlementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 1';

// //nextSibling
// console.log(itemList.nextSibling);
// //nextElementSibling
// console.log(itemList.nextElementSibling);

// //previous
// console.log(itemList.previous);
// //previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

//createElement

// // create a div
// var newDiv = document.createElement('div');

// // Add Class
// newDiv.className= 'hello';

// // Add id
// newDiv.id = 'hello1';

// // Add  attr
// newDiv.setAttribute('tittle','Hello Div');

// // create text node
// var newDivText = document.createTextNode('Hello World');

// // Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var itemDescription = document.getElementById('itemDescription');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
itemDescription.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;

    var newDescription = document.getElementById('itemDescription').value;
    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(" "+newDescription));
    // Create Edit button element
    var editBtn = document.createElement('button');
    // Add classes to Edit button
    editBtn.className = 'btn btn-info btn-sm float-right edit';
    // Add left margin to the Edit button
    editBtn.style.marginLeft = '5px'
    // Append text node
    editBtn.appendChild(document.createTextNode('Edit'));

    // Create del button element
    var deleteBtn = document.createElement('button');
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));


    // Append button to li
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      var itemDescription = item.firstChild.nextSibling.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1 || itemDescription.toLowerCase().indexOf(text) !== -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }