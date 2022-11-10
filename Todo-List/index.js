//cache Variables
const form = document.querySelector('form');
const input = document.querySelector('#item');
const ul = document.querySelector('ul');
const ClearButton = document.querySelector('button');
const Items = [];
const data = JSON.parse(localStorage.getItem('Tasks'));



const createItem = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}

// Submit form Event
form.addEventListener('submit', function (e) {
    //to prevent from refreshing
    e.preventDefault();

    Items.push(input.value);

    localStorage.setItem('Tasks', JSON.stringify(Items));

    createItem(input.value);

    input.value = '';
})

//Get  data from local Storage

data.map((item) => {
    createItem(item);
})

