//1-ое задание
let password = 'qwe/23._';

if(password.length > 3 && (password.includes("-") || password.includes("_"))) {
    console.log("Пароль надёжный");
} else{
    console.log("Пароль недостаточно надёжный");
}

// 2-ое задание
let firstname = 'дЕНи';
let surname = 'шАраПуДдтНоВ';
 

let newName = console.log(firstname.charAt(0).toUpperCase() + firstname.slice(1).toLowerCase());
let newSurname =console.log(surname.charAt(0).toUpperCase() + surname.slice(1).toLowerCase());
let x = newName !== firstname ? console.log('Имя преобразовано') : console.log('Имя не преобразовано')
let y = newSurname !== surname ? console.log('Имя преобразовано') : console.log('Имя не преобразовано')





