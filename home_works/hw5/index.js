// Домашнее задание (дедлайн 28.05.2021 23:59):
// Реализуйте следующую иерархию классов:
// 1) Напишите класс Transport (транспортное средство),
// поля и методы добавьте произвольно на свое усмотрение:
// к примеру: объем бензобака, запуск двигателя(метод) и т.д.
// 2) Создайте 3 класса наследника от Transport:
//     * Car(автомобиль)
//     * Ship(корабль)
//     * Plane(самолет)
// 3) У каждого наследника переопределите один метод,
// который будет выводить к примеру  в консоль "другую" логику поведения
// 4) Каждому наследнику добавьте свойства и методы характерные именно для него:
// к примеру у корабля может быть водоизмещение, у самолета размах крыльев,
// у автомобиля количество колес
// 5) Создайте eпо одному экземпляру каждого созданного класса

import Transport from "./models/Transport";
import Car from "./models/Car";
import Ship from "./models/Ship";
import Plane from "./models/Plane";

const myTransport = new Transport("John", "train");
console.log(myTransport);

const myPriora = new Car("Adilet", "LADA Priora", 1200);

myPriora.start();
console.log(myPriora.isStarted());

myPriora.off();
console.log(myPriora.isStarted());

const myShip = new Ship("Adilet", 25000);
myShip.dropAnchor();
myShip.raiseAnchor();

const myPlane = new Plane("Adilet", 119, 2);
myPlane.lowerСhassis();
myPlane.raiseСhassis();

// -------------
Array.prototype.TakeRight = function (count) {
  let copy = [...this];
  let arr = copy.reverse().slice(0, count);
  return arr.reverse();
};

Array.prototype.TakeLeft = function (count) {
  let copy = [...this];
  let arr = copy.slice(0, count);
  return arr;
};

Array.prototype.TakeWhile = function (filter) {
  let arr = [];
  let i = 0;
  while (filter(this[i])) {
    arr.push(this[i]);
    i++;
  }
  return arr;
};

let testArr = [1, 2, 3, 4, 5, 6, "str", 12, 67892, "str1"];

let rightPart = testArr.TakeRight(2);
let leftPart1 = testArr.TakeLeft(2);
console.log(rightPart, leftPart1);

const filtered = testArr.TakeWhile((el) => typeof el !== typeof "");
console.log(filtered, "s");
