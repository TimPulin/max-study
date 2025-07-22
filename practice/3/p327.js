/*
Дан объект со значениями — массивами строк. 
Например, каждый пользователь решил несколько задач и user2problems является объектом с ключами-пользователями и значениями — массивами айдишников задач.

Необходимо «инвертировать» объект. 
Тогда результатом работы функции будет объект с ключами-задачми и и значениями — массивами пользователей, 
которые эту задачу решили.
*/
// NOTE можно было с помощью Map, но решил не усложнять
function invertObject(user2problems) {
  const tasksByUsers = {};

  for (const [user, taskList] of Object.entries(user2problems)) {
    taskList.forEach((task) => {
      tasksByUsers[task] ??= [];
      tasksByUsers[task].push(user);
    });
  }

  return tasksByUsers;
}

const user2problems = {
  user1: ["problemA", "problemB"],
  user2: ["problemB", "problemC", "problemD"],
  user3: ["problemA"],
  user4: ["problemC", "problemD"],
  user5: ["problemB"],
};
