// 1-ое задание

let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
  ];

  function filterObject(objects, key, value){
    const result = [];
    for(let i = 0; i < objects.length; i++){
        const obj = objects[i];
        if(obj[key] === value){
            result.push(obj);
        } 
    }
    return result;
  }

  const filteredArray = filterObject(objects, 'name', 'Иван'); 
  console.log(filteredArray); 

//2-ое задание

let arr = [
    {
       value: "Russia",
       label: 'Russia',
    },
    {
        value:"Germany",
        label:"Germany",
    },
    {
        value:"France",
        label:"France",
    }
]


function createSelect(arr, value) {
    let result = document.createElement('select');
    let valueExists = false;
    arr.forEach(item => {
     let option = document.createElement('option');
     option.value = item.value;
     if (option.value === value) {
      valueExists = true;
      option.selected = true;
     }
     option.text = item.label;
     result.appendChild(option);
    });
    if (!valueExists) result.firstChild.selected = true;
   return result;
}

samplePage.appendChild(createSelect(arr, "Germany"));

// 3-е задание
let arr2 = ['a','b','c'];

function createSelect(arr, str) {
  if (typeof arr[0] === 'string') {
    arr = arr.map(str => ({ value: str, label: str }));
  } else if (typeof arr[0] === 'number') {
    arr = arr.map(num => ({ value: String(num), label: String(num) }));
  }

  const body = document.body;
  const select = body.appendChild(document.createElement('select'));

  arr.forEach(function(a) {
    const option = document.createElement('option');
    option.value = a.value;
    option.innerHTML = a.label;

    select.appendChild(option);
    if (option.value === str) {
      option.setAttribute('selected', true);
    }
  });
  
  return select
}

createSelect(arr2, "b");