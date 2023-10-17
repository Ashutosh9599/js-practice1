// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello';
// items[2].style.backgroundColor = 'green';

// for (let i = 0; i < items.length; i++) {
//     items[i].style.fontWeight = 'bold';
// }

var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello';
li[2].style.backgroundColor = 'green';

for (let i = 0; i < li.length; i++) {
    li[i].style.fontWeight = 'bold';
}
