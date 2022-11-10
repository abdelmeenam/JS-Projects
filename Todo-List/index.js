//cache Variables
const form = document.querySelector('form');
const input = document.querySelector('#item');
const ul = document.querySelector('ul');
const ClearButton = document.querySelector('button');
const Items = JSON.parse(localStorage.getItem('Tasks')) ? JSON.parse(localStorage.getItem('Tasks')) : [];


//Create li and append to ul
const createItem = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
}


// Submit form Event
form.addEventListener('submit', function (e) {
    //to prevent from refreshing
    e.preventDefault();

    //Add to localstorage
    Items.push(input.value);
    localStorage.setItem('Tasks', JSON.stringify(Items));
    createItem(input.value);
    input.value = '';
})


//Mapping on data array to get tasks from local storage and show them
Items.map((item) => {
    createItem(item);
})

// clear 
ClearButton.addEventListener('click', function (e) {
    localStorage.clear('Tasks');
    ul.innerHTML = '';
})
