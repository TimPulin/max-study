/*
Дан массив пользователей чата. Про каждого пользователя известны имя, статус и время последней активности.

Напишите функцию, которая определяет, кто online, offline и away. 
Если кто-то онлайн, но последний раз был активен более 10 минут назад, то он считается away.

Если пользователей с каким-то статусом вообще нет в чате, то такого поля не должно быть в объекте.
*/

const NON_ACTIVITY_TIMEOUT = 10;
function whosOnline(friends) {
  const statuses = {};

  let statusKey = null;
  for (const friend of friends) {
    if (friend.status === "offline") {
      statusKey = "offline";
    } else if (friend.lastActivity > NON_ACTIVITY_TIMEOUT) {
      statusKey = "away";
    } else {
      statusKey = "online";
    }

    if (statusKey) {
      statuses[statusKey] ??= [];
      statuses[statusKey].push(friend.username);
    }
  }
  return statuses;
}

const users = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

console.log(whosOnline(users));
// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }
