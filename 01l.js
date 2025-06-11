// ...

// https://maxcode.dev/problems/who-is-online/
// Дан массив пользователей чата. Про каждого пользователя известны имя, статус и время последней активности.

// Напишите функцию, которая определяет, кто online, offline и away. Если кто-то онлайн, но последний раз был активен более 10 минут назад, то он считается away.

// function extractKey(friend) {
//   if (friend.lastActivity > 10 && friend.status === "online") {
//     return "away";
//   }
//   return friend.status;
// }

// динамическая типизация (js, python)
// s = "qwe";
// s = 123

// статическая типизация (typescript)
// let s: string = "qwe";
// s = 1; // error

// слабая (js)
// 12 + "34" === "1234"

// сильная (python)
// 12 + "34" // error

// const y = x ?? 123;

// function whosOnline(friends) {
//   const obj = {};
//   const map = new Map();
//   friends.forEach((friend) => {
//     const key = extractKey(friend);
//     // if (!map.has(key)) map.set(key, []);
//     // map.get(key).push(friend.username);

//     const names = map.getOrInsert(key, []);
//     names.push(friend.username);

//     // obj[key] = obj[key] ?? []
//     obj[key] ??= [];
//     obj[key].push(friend.username);
//   });
//   // const obj1 = {};
//   // Array.from(obj.entries()).forEach(([key, value]) => {
//   //   obj1[key] = value;
//   // });
//   // return obj1;

//   return Object.fromEntries(map);
// }

// type User = {
//     username: string;
//     status: 'online' | 'offline' ;
//     lastActivity: number;
// }

// const users = [
//   {
//     username: "David",
//     status: "online",
//     lastActivity: 15,
//   },
//   {
//     username: "Lucy",
//     status: "offline",
//     lastActivity: 22,
//   },
//   {
//     username: "Bob",
//     status: "online",
//     lastActivity: 104,
//   },
// ];

// console.log(whosOnline(users));
// {
//   offline: ['Lucy'],
//   away: ['David', 'Bob']
// }
