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
// 5) Создайте по одному экземпляру каждого созданного класса

import Transport from "./models/Transport";
import Car from "./models/Car";
import Ship from "./models/Ship";
import Plane from "./models/Plane";

const myTransport = new Transport("John", "train");
console.log(myTransport);

const myPriora = new Car("Adilet", "LADA Priora");

myPriora.start();
console.log(myPriora.isStarted());

myPriora.off();
console.log(myPriora.isStarted());

const myShip = new Ship("Adilet", 25000);
myShip.dropAnchor();
myShip.raiseAnchor();

const myPlane = new Plane();
myPlane.lowerСhassis();
myPlane.raiseСhassis();
