/*
Пользователи отправляют решения в тестирующую систему. 
Для каждой отправки известно, какой пользователь ее сделал, какую задачу он решал и какой ведикт он получил.

Верните список пользователей, у который были только успешные отправки, то есть со статусом "OK". 
Порядок пользователей значения не имеет.
*/

const STATUS_OK = "OK";
function effectiveUsers(submissions) {
  const successfulUsers = new Set();
  const unluckyUsers = new Set();

  for (const { user, status } of submissions) {
    if (status === STATUS_OK) {
      successfulUsers.add(user);
    } else {
      unluckyUsers.add(user);
    }
  }

  return Array.from(successfulUsers.difference(unluckyUsers));
}

const submissions = [
  {
    problem: "find-developers",
    user: "max",
    status: "TIME_LIMIT",
  },
  {
    problem: "remove-key",
    user: "serge",
    status: "OK",
  },
  {
    problem: "extract-key",
    user: "alex",
    status: "OK",
  },
  {
    problem: "remove-key",
    user: "max",
    status: "OK",
  },
  {
    problem: "find-developers",
    user: "kate",
    status: "RUNTIME_ERROR",
  },
  {
    problem: "find-developers",
    user: "serge",
    status: "OK",
  },
  {
    problem: "remove-key",
    user: "kate",
    status: "RUNTIME_ERROR",
  },
];

console.log(effectiveUsers(submissions)); // ["alex", "serge"]
