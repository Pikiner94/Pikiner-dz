// alert ('hello world');

// variable

// let name = "Название продукта";

// // console.log (100);
// // console.log (10>1);

// console.log ('fn', name);

// camelCase- используется в названии переменной;

// const - заносим константы, которые не меняются
// var usefull

// Если переменная обьявлена через let, то мы можем ее перезаписать

// name = 'my product';
// console.log (name);

// const - нельзя перезаписать а let можно;

// ========

// DataTypes - Типы данных


// Sting
// Number
// Boolean
// Null
// undefined
// let a;
// console.log (a); - нету значения для переменной

//null - это ничто, ставит сам программист

// let b = null
// console.log(b) 
// console.log (typeof b)

// Null всегда будет object  = это нужно запомнить

// Symbol

// =========

// String

// Чтобы дать тип данных для значения нужно указать их в:

// Двойные и одинарные разницы не имеет
// // ''
// // ""


// Они выводят значение в буквальном смысле
// ``


// Шаблонная строка -  позводяет выводить несколько переменных в одном значении;
// ${ }

// Задание 1

// let name=("Генератор защитного поля");
// console.log (name);
// let price =("1000 кредитов");
// console.log (price);
// let product = `Выбран: ${name}, Цена: ${price}`;
// console.log (product);
// price = ("2000 кредитов");
// console.log (price)
// let product2 = `Выбран: ${name}, Цена: ${price}`;
// console.log (product2);


///////////////////////


// Задание 2

// let total = 100
// let ordered = 50


// // ==================

// BOOLEAN 

// null
// indefined

// разница в том, что null 

// indefined - неопределене или нету такой переменной
// null - 

// Андефайнл - это конгда сервер не может найти и это отдает комрьютер
// null - это мы пишем // Если например нету значения, которое тебе нужно выводить и ставится


// Bigin - большое число

// Задание 2

// let total = 100
// let ordered = 50

// Оbject

// Пример:
// let user = {
//     name: "Vova",
//     age: 30,
//     stat:"100",
//     order: 123213
// }
// console.log (user);


// Обьект - это ключ-значение
// Массив - записывается
 
// Примитивы

// Sting
// Number
// Boolean

// Служебные

// Null
// undefined

//Ссылочные

// object


// Операторы JS Бывают:

// Математические
// Строковые
// Логические

//math

// +
// -
// *
// /
//** */
// % пример Остаток от деления - 7/2 = 1 - Целочисленное и уходит= 6 и остается остаток 1


// Склеивание или сложение строк - это Конкотенация

// let song ='You did\'nt again" - Вот как можно обойти апостроф в значении, иначе будет undefined;

//  Логические операторы
//  Связаны с boolean:

//  = - это знак присваивания;
//  == - это будет сравнение с приведением типов;
//  === - сравнение без приведения типов;
//  >
//  <
//  >=
//  <=
//  !
// &&

//  JS с динамической типизацией он сам может подставить тип данных;

//  console.log (10>=2); - будет true Так как совподает одно значение;
// console.log (!true); - переварачивает значение, будет выводить false;

// === - сравнение значения с учетом типов 
// == - не бере во внимание типы и говорится о приведению к одному типу;

// != не равно
// !== - с приведением типов. не равно
// !=== - без приведения типов 





/////////

//falsy values

// 0
// null
// undefined
// NaN
// false

// && - видит только Тру и Фолс Если 2 тру то вернет последнее True;
// Если в значение поставить false то он вернет значение, которое равно false;

// console.log (22 & 22); -  вернул 22 - 22 это True и на это последнее значение
// console.log (22 & 22 & 0); - вернул 0 - будет всегда возвращать 0, так как это false, а он возвращает false

// OR

// Отдает первое значение по True а False он пропускает;


// Приведение типов 

// sring -  Высший приоритет

// Можно привести в тип String из Boolean

// let str = true;
// console.log (typeof str.toString()) //Пример как Boolean привести к строке

// let money=true
// money=String(23)
// console.log (typeof money)

// number
// boolean - Самый низкий приоритет

// сли один из операторов + и рядом с ним строка то это соединяет 2 значения

// console.log (2+"привет") = 2привет

// Также можно из Строки сделать Number  

// Nan  - не может выполнить математическую операцию

// let result = Number("20px");
// console.log (result)

// Математические 
// parseFloat (10.5) - выводить нецелочисленное значение
// parseInt  - приводит к целочисленному значению


// Boolean

// let result = Boolean(0)
// console.log(result)


// ! - это логический оператор не

///////////////////////


// Задание 2/////

// let total = 80
// let ordered = 120

// if (total>ordered){console.log ("Заказ оформлен, с вами свяжется менеджер.")}
// else {console.log ("На складе недостаточно товаров!")}

// let total = 80
// let ordered = 20

// if (total>ordered){console.log ("Заказ оформлен, с вами свяжется менеджер.")}
// else {console.log ("На складе недостаточно товаров!")}


// let total = 80
// let ordered = 80

// if (total>ordered){console.log ("Заказ оформлен, с вами свяжется менеджер.")}
// else {console.log ("На складе недостаточно товаров!")}

// let total = 80
// let ordered = 130

// if (total>ordered){console.log ("Заказ оформлен, с вами свяжется менеджер.")}
// else {console.log ("На складе недостаточно товаров!")}

// let total = 80
// let ordered = 130

// if (total>=ordered){console.log ("Заказ оформлен, с вами свяжется менеджер.")}
// else {console.log ("На складе недостаточно товаров!")} 


// const total = 80
// const ordered = 130

// if (total>=ordered){console.log ("Заказ оформлен, с вами свяжется менеджер.")}
// else {console.log ("На складе недостаточно товаров!")} 

// const total = 80
// const ordered = 130

///////////////////////



// if (total>=ordered){console.log ("Заказ оформлен, с вами свяжется менеджер.")}
// else {console.log ("На складе недостаточно товаров!")} 

//при else - Здесь будет отрабатывать противоположнеое условие

// else не является обязательным
//
// if else здесь будет отрабатывать заданное условие


// Задание 3

// let firstMassage = prompt( "Введите пароль");
// const pass = ("ADMIN_PASSWORD")

// if (firstMassage == pass ){alert("Добро пожаловать");}
// else if (firstMassage != pass) {alert ("Доcтуп запрещен");}

// // Вариант 2

// let FM = prompt( "Введите пароль");
// const pass = ("ADMIN_PASSWORD");

// if (FM == pass) {alert ("Добро пожаловать");}
// else if (FM ===null) {alert ("Отменено пользователем!");} // Вопрос, При изменении строчек 318 и 319 местами не срабатывает вывод alert при значении null, почему?
// else if (FM != pass) {alert ("Доступ запрещен, неверный пароль!");}





// = -  Знак присваивания
// == - Знак сравнения без приведения к типу
// === - Знак сравнения с приведением типов данных


// let massage = prompt( "Введите пароль");
// const pass = ("ADMIN_PASSWORD");

// if (massage == pass) {alert ("Добро пожаловать"),console.log("Добро пожаловать") ;}
// else if (massage ===null) {alert ("Отменено пользователем!"), console.log(("Отменено пользователем!"));}
// else if (massage != pass) {alert ("Доступ запрещен, неверный пароль!"), console.log ("Доступ запрещен, неверный пароль!");};

// alert (massage);

///////////////////////

// Задание 3

// let massage 
// let show = prompt("Введите пароль")
// let pass = ("ADMIN_PASSWORD")

// if (show == pass) {
//     massage = ("Добро пожаловать!")
//     console.log (massage)
//     alert (massage)

// }

// else if (show==null) {
//     massage = ("Отменено пользователем"),
//     console.log (massage),
//     alert (massage)
// }

// else if (show != pass) { 
// massage = ('Доступ запрещен, неверный пароль!'),
// console.log (massage),
// alert (massage);
// };

// massage = "const ADMIN_PASSWORD = 'adminpass'; let message;"
// alert (massage)

///////////////////////


// let massage =("123")
// alert (massage)

////////////////////////

// Задание 4

// let feroP = prompt("Какое кол-во дроидов вы хотите купить?")
// let credit = 35500
// let PricePerDroid = 3000
// let total_price = (PricePerDroid*feroP)
// let cop = `Вы купили: ${feroP} дроидов, на счету осталось: ${credit-total_price}`;


// if (feroP==null) {
//     alert ("Отменено пользователем!")
// }
// if (total_price>credit) {
//     alert ("Недостаточно средств на счету")
// } 
// else {
//     alert (cop)}

    ////////////////////////

    // /////////////////Задание 5

    // let deliveryCount = prompt("Введите название страны для доставки товара")
    // let del = deliveryCount.toLowerCase()
    
    // let china = ("китай");
    // let chili = ("чили");
    // let austr = ("австралия");
    // let india = ("индия");
    // let yama = ("ямайка");

    // let chinaCredit = 100
    // let chiliCredir = 250
    // let austrCredit = 165
    // let indiaCredit = 90
    // let yamaCredit = 130

    // let chinaAlert =`Доставка в ${china[0].toUpperCase()+("итай")} будет стоить ${chinaCredit} кредитов`
    // let chiliAlert =`Доставка в ${chili[0].toUpperCase()+("или")} будет стоить ${chiliCredir} кредитов`
    // let austrAlert =`Доставка в ${austr[0].toUpperCase()+("встралию")} будет стоить ${austrCredit} кредитов`
    // let indiaAlert =`Доставка в ${india[0].toUpperCase()+("ндию")} будет стоить ${indiaCredit} кредитов`
    // let yamaAlert =`Доставка в ${yama[0].toUpperCase()+("майку")} будет стоить ${yamaCredit} кредитов`


    // switch (del) {
    //     case china:
    //     alert (chinaAlert);
    //     break;

    //     case chili:
    //     alert (chiliAlert)
    //     break; 

    //     case austr:
    //     alert (austrAlert)
    //     break
    
    //     case india:
    //     alert (indiaAlert)
    //     break; 

    //     case yama:
    //     alert (yamaAlert)
    //     break; 

    //     default : 
    //     alert ( "В вашей стране доставка не доступна")
    // }

////////////

    // let calss =  ("китай")

    // let (calss[0].toUpperCase()+("итай"))



    // let chinaCredit = 100
    // switch (del) {
    // case ("китай"):
    // alert `Ваша доставка в ${china} c вас ${chinaCredit}` 
    // break
    // }

    
    // let ChinaP = 120
    // let ChiliP = 250
    // let China = ("Китай");
    // let Chili = ('Чили');
    // let Aust  = ("Австралия")

    // switch (deliveryCount){
    //     case China:
    //     alert (`Доставка в ${China} будет стоить ${ChinaP} кредитов'. `);
    //     break;
    //     case China:
    //         alert (`Доставка в ${China} будет стоить ${ChinaP} кредитов'. `);
    //         break;
    // }

    
    
    // switch (deliveryCount) { 
    //     case 2:
    //     alert("Привет")
    //     break;
    //     default:
    //     alert( "Нет таких значений" );


    // let key = ("Китай")  
    // switch (key){ 
    // case ("Япония"):
    //         alert ("Нет");
    //         break;

    // Задание 6 

    // let firstOd = prompt("Введите число")
    // let total = firstOd 
    // let total b = firstOd+total
    // for (firstOd === Number; firstOd+total;) {
    //     alert 
//     } 
// }

// for (a + )
// let i = 0;
// while (i < 3) {
//   alert(i);
// }

// Цикл:

// for (Начало; Условие ; Шаг)

// // Начало выполняется только 1 раз

// Цикл будет продолжатся пока не вернется значение false
// brake - получено 

// после тела ставится if (Указывается условие) break;
// console.log(...caches.delete.)

// continue - не выведит ничего прости перескочит итерацию

/////////

// можно остановить цикл просто отметив его перед использованием
// firstfor  for (...caches.delete.)

// break firstfor

// total = 0
// let b = prompt("Введите значение")
// for (let  ; b+total;b++)
// {
//     alert (c)
// }

// let i = 0
// while (i<6) {
//     console.log (i);
//     i++;
// }

// let i = 0
// do {
//     console.log (i);
//     i++;
// }
// while (i<6);


    // let firstOd = prompt("Введите число")
    // let total = firstOd 
    // let total b = firstOd+total
    // for (firstOd === Number; firstOd+total;) {
    // alert 
    
    
    // let firstOd = prompt("Введите число")
    // total = 0
    // let b = firstOd + total

    // for (;b!=null,); 
} 