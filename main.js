console.log("Задача 1");
console.log(typeof(9));
// Предположение: number
// Фактический: number

console.log(typeof(1.2));
// Предположение:number
// Фактический: number

console.log(typeof(NaN));
// Предположение: number
// Фактический: number

console.log(typeof("Hello World"));
// Предположение: string
// Фактический: string

console.log(typeof(true));
// Предположение: boolean
// Фактический: boolean

console.log(typeof(2 != 1));
// Предположение: boolean
// Фактический: boolean


console.log("сыр" + "ы");
// Предположение:сыры
// Фактический:сыры

console.log("сыр" - "ы");
// Предположение:ошибка
// Фактический:NaN

console.log("2" + "4");
// Предположение:24
// Фактический:24

console.log("2" - "4");
// Предположение:-2
// Фактический:-2

console.log("Сэм" + 5);
// Предположение:Сэм5
// Фактический:Сэм5

console.log("Сэм" - 5);
// Предположение: Nan
// Фактический:NaN

console.log(99 * "шары");
// Предположение:NaN
// Фактический:NaN



console.log("Задача 2");
let a = 2;
let b = 3;
let P = (a+b)*2;
let S = a*b;
console.log ("Длина сторон прямоугольника: " +a + " и " +b);
console.log("Периметр: " +P);
console.log("Площадь: " +S);
console.log("Отношение периметра к площади: " + `${P/S}`);


console.log ("Задача 3");
let c= 42;
let f = 50;
console.log(`${c}°С соответствует ${c*9/5+32}°F`);
console.log(`${f}°F соответствует ${5/9*(f-32)}°C`);


console.log ("Задача 4");
let year = prompt ("Введите год: ");
alert((year % 4 ==0)&&(year % 100 !=0) ? "Високосный" : "Обычный" );


console.log ("Задача 5");
let number_1 = Number(prompt("Введите число 1: "));
let number_2 = Number(prompt("Введите число 2: "));
if ((number_1 == 10) || (number_2==10) || (number_1+number_2 == 10) ) {
    console.log("истина");
}
else {
    console.log("ложь");
}


console.log("Задача 6");
let count = (prompt("Введите число овец: "));
let text = "";
for (let i = 1; i<=count;i++){
   text += i + "овечка...";
}
console.log(text) 

console.log("Задача 7");
for (let i = 0; i<=15; i++) {
    if (i%2==0)
    console.log(`"${i} четное"`);
    else
    console.log(`"${i} нечетное"`);
}


console.log("Задача 8");
for(let i = 1; i <= 12; i++)
{
    let s = '';
    for(let j = 0; j < i; j++)
    {
        if(i % 2 == 0)
            s += "#";
        else
            s += '*';
    }
    console.log(s);
}

console.log("Задача 9");
let n1 = (prompt("Введите число 1: "));
let n2 = (prompt("Введите число 2: "));
let n3 = (prompt("Введите число 3: "));
let b1 = 0;
if (n1>n2){
    b1 = n1;
    n1=n2;
    n2=b1;
}
if (n2>n3) {
    b1=n2;
    n2=n3;
    n3=b1;
}
if (n1>n2){
    b1 = n1;
    n1=n2;
    n2=b1;
}
console.log(n1, n2, n3);

console.log("Задача 10");
 n1 = prompt("Введите первое число: ");
 n2 = prompt("Введите второе число: ");
 n3 = prompt("Введите третье число: ");
let n4 = prompt("Введите четвертое число: ");
let n5 = prompt("Введите пятое число: ");
if (n1 >n2 && n1 > n3 && n1 > n4 && n1 > n5) {
  console.log(n1);
}

if (n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5) {
  console.log(n2);
}

if (n3 > n1 && n3 > n2 && n3 > n4 && n3 > n5) {
  console.log(n3);
}

if (n4 >n1 && n4 > n3 && n4 > n2 && n4 > n5) {
  console.log(n4);
}

if (n5 > n1 && n5 > n3 && n5 > n4 && n5 > n2) {
  console.log(n5);
}