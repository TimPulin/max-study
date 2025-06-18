/*
Дан объект со значениями — массивами строк. 
Например, каждый пользователь решил несколько задач и user2problems является объектом с ключами-пользователями и значениями — массивами айдишников задач.

Необходимо «инвертировать» объект. 
Тогда результатом работы функции будет объект с ключами-задачми и и значениями — массивами пользователей, 
которые эту задачу решили.
*/

function invertObject1(user2problems) {
  const tasksByUsers = {};

  for (const [user, taskList] of Object.entries(user2problems)) {
    taskList.forEach((task) => {
      tasksByUsers[task] ??= [];
      tasksByUsers[task].push(user)
    })
  }

  return tasksByUsers;
}

function invertObject2(user2problems) {
  const tasksByUsers = new Map();
  for (const [user, taskList] of Object.entries(user2problems)) {
    taskList.forEach((task) => {
      if(!tasksByUsers.has(task)) {
        tasksByUsers.set(task, [])
      }
      tasksByUsers.get(task).push(user)
    })
  }  

  return Object.fromEntries(tasksByUsers);
}


const user2problems = {
  user1: ["problemA", "problemB"],
  user2: ["problemB", "problemC", "problemD"],
  user3: ["problemA"],
  user4: ["problemC", "problemD"],
  user5: ["problemB"],
};


console.time('invertObject1')
invertObject1(user2problems);
console.timeEnd('invertObject1');

console.time('invertObject2');
invertObject2(user2problems);
console.timeEnd('invertObject2');


