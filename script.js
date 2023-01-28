let num1 = Number(prompt('Введите число 1'));
if (num1 == 1) {
    alert( "Число 1 равно 1" );
}
if (num1 > 1) {
    alert( "Число 1 больше 1" );
}
if (num1 < 1) {
    alert( "Число 1 меньше 1" );
}
let num2 = Number(prompt('Введите число 2'));
if (num2 == 3) {
    alert( "Число 2 равно 3" );
}
if (num2 > 3) {
    alert( "Число 2 больше 3" );
}
if (num2 < 3) {
    alert( "Число 2 меньше 3" );
}


let test = true;
if (test === true) {
console.log('+++');
} else {
console.log('---');
}


let day = Number(prompt('Введите число от 1 до 31'));
if (day >= 20) {
    alert( "Третья декада" );
}
if (day < 10) {
    alert( "Первая декада" );
}
if (10 < day < 20) {
    alert( "Вторая декада" );
}