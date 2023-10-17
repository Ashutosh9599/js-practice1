//ElementsByClassName
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello';
// items[2].style.backgroundColor = 'green';

// for (let i = 0; i < items.length; i++) {
//     items[i].style.fontWeight = 'bold';
// }

//ElementsByTagName
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello';
// li[2].style.backgroundColor = 'green';

// for (let i = 0; i < li.length; i++) {
//     li[i].style.fontWeight = 'bold';
// }

//querySelector
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

//querySelectorforAll
var secondItem = document.querySelectorAll('li:nth-child(2)')[0];
secondItem.style.color = 'green'; 

var odd = document.querySelectorAll('li:nth-child(odd)');
for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'green';
}
