// 1
function findMax(a, b=0) {
  if (a > b) return a;
  return b;
};
myFunc(2, 1); // -> 2
const myMinExpression = (...nums) => Math.min(...nums);

let max_num = findMax(10);
let max_num1 = findMax(9, 0);

console.log(myMinExpression(1, 2, 3));
//2
const countChar = (string, char) => {
  let count = 0;
  for (let ch of string) {
    if (ch == char) count += 1;
  }
  return count;
};

console.log(countChar('wwdeawww', 'w'));
//3
const tasks = [
  {
    name: "Сделать домашнее задание на курсах",
    duration: 2,
    priority: 3,
  },
  {
    name: "Похвалить себя",
    duration: 1,
    priority: 6,
  },
  {
    name: "Изучить javascript", //описание задачи
    duration: 30, //длительность задачи в днях
    priority: 4, //приоритетность задачи, чем больше цифра тем выше приоритет
  },
  {
    name: "Похвалить преподавателя))",
    duration: 1,
    priority: 7,
  },
  {
    name: "Принять душ",
    duration: 0.2,
    priority: 2,
  },
  {
    name: "Помочь другу переустановить винду",
    duration: 1,
    priority: 1,
  },
  {
    name: "Понять что функции в javascript  это очень просто",
    duration: 5,
    priority: 4,
  },
];

function myFunc(argument) {
  console.log(argument**2);
};

const oneMoreDayTasks = tasks.filter( (task) => {
  return task.duration > 1;
});
const mappedTasks = tasks.map((task) => {
  task.priority++;
  return task;
});
const longestTask = tasks.reduce((accumulator, currentValue) => {
  if (accumulator.duration < currentValue.duration) accumulator = currentValue
  return accumulator
});




console.log(oneMoreDayTasks);
console.log(mappedTasks);
console.log(longestTask,'daw');
//4
class Task {
  constructor(name, duration, priority) {
    this.name = name;
    this.duration = duration;
    this.priority = priority;
  };
};

const new_task = new Task("тренироваться", 0.2, 3);

console.log(tasks);