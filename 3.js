//1-ое задание
let a = [];
let n = 0;
let m = 100;
let count = 100;
let min = Math.min(n, m);
let max = Math.max(n, m);

for(let i = min; i < count; i++ ){
    a.push(Math.floor(Math.random() * (max-min+1)+min ))
}

console.log(a);

//2-ое задание

let string = 'Ассаламу 1алейкум, Мир!'
let reversed = '';

for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
}
console.log(string);
console.log(reversed);


// 3-ье задание

let tank = [false, false, true, false, false, false, false, false, false, true];
let damage = false;

for(let i = 0; i < tank.length; i++){
    console.log(`танк переместился на ${i + 1}`);
    if(tank[i]){
        if(damage){
            console.log('танк уничтожен');
            break;
        } else {
            damage = true; 
            console.log('танк поврежден');
        }
    } 
}

//4-ое задание

let mounth = [];
let weeks = ['Понедельник', "Вторник", "Среда", "Четверг", "Пфтница", "Субюота", "Воскресенье"];

let day = 'Вторник';
let indexWeek = weeks.indexOf(day);

for(let i = 1; i < 32; i++){
    mounth.push(i);
}

for(let i = 0; i < weeks.length; i++){
    if(weeks[i] == day){
        indexWeek = i;
    }
}

for (let elem of mounth) {
    const y = (indexWeek + elem - 1) % 7; 
    console.log(`${elem} января, ${weeks[y]}`);
  }