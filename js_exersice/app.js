// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Function to fetch and display data from the cloud
function fetchAndDisplayData() {
  axios
    .get('https://crudcrud.com/api/741d65fe67fd4725854772cda6847d88/appointmentId')
    .then((res) => {
      const usersData = res.data;
      for (var i = 0; i < res.data.length; i++) {
        const userData = usersData[i];
        addUserToList(userData);
      }
    })
    .catch((err) => console.log(err));
}

// Call the function to fetch and display data when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchAndDisplayData);

function addUserToList(userData) {
  // Create a new list item with user details
  const li = document.createElement('li');
  li.dataset.id = userData._id; // Set the id as a data attribute

  li.appendChild(document.createTextNode(`${userData.name}: ${userData.email}: ${userData.phone}`));

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete';
  li.appendChild(deleteButton);

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.className = 'edit';
  li.appendChild(editButton);

  // Append to ul
  userList.appendChild(li);
}

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === '' || emailInput.value === '' || phoneInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000);
  } else {
    const userData = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
    };

    axios
      .post('https://crudcrud.com/api/741d65fe67fd4725854772cda6847d88/appointmentId', userData)
      .then((res) => {
        console.log(res);
        addUserToList(res.data);
      })
      .catch((err) => console.log(err));

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
  }
}

// Remove item
userList.addEventListener('click', removeItem);

function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      var li = e.target.parentElement;
      userList.removeChild(li);

      const id = li.dataset.id;

      axios
        .delete(`https://crudcrud.com/api/741d65fe67fd4725854772cda6847d88/appointmentId/${id}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  }
}
