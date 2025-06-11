type User = {
  username: string;
  status: "online" | "offline";
  lastActivity: number;
};

interface IA {
  foo(): void;
}

class A implements IA {
  foo() {}
}

const users: User[] = [
  {
    username: "David",
    status: "online",
    lastActivity: 15,
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

// {
//   offline: ['Lucy'],
//   away: ['David', 'Bob']
// }

// Promise<string>

// https://www.typescriptlang.org/docs/handbook/utility-types.html

// type AnswerType  = {
//     online?: string[];
//     offline?: string[];
//     away?: string[];
// }

// string[] Array<string>

type Result = Record<"away" | "online" | "offline", string[]>;

const o: Result = {};

function extractKey(friend) {
  if (friend.lastActivity > 10 && friend.status === "online") {
    return "away";
  }
  return friend.status;
}

function whosOnline(friends: string[]):  {
  const obj = {};
  // const map = new Map();
  friends.forEach((friend) => {
    const key = extractKey(friend);
    // if (!map.has(key)) map.set(key, []);
    // map.get(key).push(friend.username);

    // const names = map.getOrInsert(key, []);
    // names.push(friend.username);

    // obj[key] = obj[key] ?? []
    obj[key] ??= [];
    obj[key].push(friend.username);
  });
  // const obj1 = {};
  // Array.from(obj.entries()).forEach(([key, value]) => {
  //   obj1[key] = value;
  // });
  // return obj1;

  // return Object.fromEntries(map);
  return obj;
}
