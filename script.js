/*let num1 = Number(prompt('Введите число которое нужно возвести в куб'));
function Stepen3(x) {
    console.log(Math.pow(x, 3));
}
Stepen3(num1);


let num2 = Number(prompt('Введите число 1'));
let num3 = Number(prompt('Введите число 2'));
function sumStepen3(y, z) {
    console.log(Math.pow(y, 3) + Math.pow(z, 3));
}
sumStepen3(num2, num3);


let razmerOplaty = prompt('Введите размер зарплаты');
function oplata(op) {
    console.log('Размер заработной платы за вычетом налогов равен значение' + ' ' + (op - op * 0.13));
}
oplata(razmerOplaty);


let num4 = Number(prompt('Введите число 3'));
let num5 = Number(prompt('Введите число 4'));
let num6 = Number(prompt('Введите число 5'));
function maxFrom3(y, z, x) {
    console.log('Максимальное число' + ' ' + Math.max(y, z, x));
}
maxFrom3(num4, num5, num6);*/


let num1 = Number(prompt('Введите число 1'));
let num2 = Number(prompt('Введите число 2'));
function sum(x, y) {
    console.log(x + y);
}
function raznost(x, y) {
    z = Math.max(x, y);
    b = Math.min(x, y);
    console.log(z - b);
}
function umnoj(x, y) {
    console.log(x * y);
}
function delen(x, y) {
    console.log(x / y);
}
sum(num1, num2);
raznost(num1, num2);
umnoj(num1, num2);
delen(num1, num2);
