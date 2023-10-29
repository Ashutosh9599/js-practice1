const form = document.querySelector("#my-form");
const expenseNameInput = document.querySelector("#expenseName");
const expenseAmountInput = document.querySelector("#expenseAmount");
const expenseCategoryInput = document.querySelector("#expenseCategory");
const expenseList = document.querySelector("#expenseList");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const expenseData = {
    name: expenseNameInput.value,
    amount: expenseAmountInput.value,
    category: expenseCategoryInput.value
  };

  localStorage.setItem(expenseNameInput.value, JSON.stringify(expenseData));

  const listItem = document.createElement("li");
  listItem.className = "list-group-item";
  listItem.textContent = `${expenseData.name}, ${expenseData.amount}, ${expenseData.category}`;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'btn btn-danger';
  listItem.appendChild(deleteButton);

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.className = 'btn btn-info';
  listItem.appendChild(editButton);

  expenseList.appendChild(listItem);

  expenseNameInput.value = "";
  expenseAmountInput.value = "";
  expenseCategoryInput.value = "Select a category";
});

expenseList.addEventListener('click', function (e) {
  if (e.target && e.target.textContent === 'Delete') {
      const listItem = e.target.parentElement;
      const expenseName = listItem.textContent.split(',')[0].trim();
      localStorage.removeItem(expenseName);
      listItem.remove();
  }

  if (e.target && e.target.textContent === 'Edit') {
    const listItem = e.target.parentElement;
    const expenseName = listItem.textContent.split(',')[0].trim();
    const expenseData = JSON.parse(localStorage.getItem(expenseName));
    
    // Populate the form inputs with the data from local storage
    expenseNameInput.value = expenseData.name;
    expenseAmountInput.value = expenseData.amount;
    expenseCategoryInput.value = expenseData.category;

    // Remove the corresponding data from local storage
    localStorage.removeItem(expenseName);

    // Remove the list item
    listItem.remove();
  }
});
