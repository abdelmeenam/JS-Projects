//localStorage = ['key1' => 'car' , 'key2' => 'far'  ]
//Index od keys    0                  1
// localStorage.getItem('');
// localStorage.getItem(0);
// localStorage.key(0);

// localStorage.setItem('', '');
// localStorage.removeItem('');
// localStorage.clear('');
//localStorage.length;


//Session storage : data will be deleted when u close your Browser
//Local sotrage   : data will be saved in your Browser
//Storage only reads  -STRING- data Not JSON 
const obj = {
    'name': "Mohamed",
    'Age': 23,
    'job': "Software Engineer"
}

//Convert Json to string
localStorage.setItem('myData', JSON.stringify(obj));

//Convert String to Json
localStorage.getItem(JSON.parse('myData'));

