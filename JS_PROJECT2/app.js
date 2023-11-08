const myForm = document.querySelector('#productForm');
const category = document.querySelector('#category');
const productName = document.querySelector('#productName');
const productPrice = document.querySelector('#productPrice');

// Function to fetch and display data from the cloud
function fetchAndDisplayData() {
    axios
        .get('https://crudcrud.com/api/5760004bd5434712b86c8ff6a89820bd/product')
        .then((res) => {
            const productData = res.data;
            productData.forEach(product => {
                addProductToList(product);
            });
        })
        .catch((err) => console.log(err));
}

fetchAndDisplayData();

function addProductToList(productData) {
    const li = document.createElement("li");
    li.dataset.id = productData._id;
    li.textContent = `${productData.name}: ${productData.price}: ${productData.category}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Order';
    deleteButton.className = 'delete';
    li.appendChild(deleteButton);

    
    const productList = document.querySelector(`#${productData.category}List`);
    if (productList) {
        productList.appendChild(li);
    }
}

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (productName.value === '' || productPrice.value === '' || category.value === '') {
        alert('Please enter all fields');
    } else {
        const productData = {
            name: productName.value,
            price: productPrice.value,
            category: category.value,
        };

        axios
            .post('https://crudcrud.com/api/5760004bd5434712b86c8ff6a89820bd/product', productData)
            .then((res) => {
                console.log(res);
                addProductToList(res.data);
            })
            .catch((err) => console.log(err));

        // Clear fields
        productName.value = '';
        productPrice.value = '';
        category.value = '';
    }
}

document.addEventListener('click', removeItem);

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        const li = e.target.parentElement;
        const id = li.dataset.id;

        axios
            .delete(`https://crudcrud.com/api/5760004bd5434712b86c8ff6a89820bd/product/${id}`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));

        li.remove();
    }
}
