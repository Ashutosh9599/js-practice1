// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '' || phoneInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create a user object
    const user = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value
    };

     // Retrieve the existing user data from local storage or initialize an empty array
     let users = JSON.parse(localStorage.getItem('users')) || [];

     // Add the new user to the array
     users.push(user);
 
     // Convert the array to a JSON string and store it in local storage
     localStorage.setItem('users', JSON.stringify(users));

    // Create a new list item with user details
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${user.name}: ${user.email}: ${user.phone}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
  }
}