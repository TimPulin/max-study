/*
Пользователи отправляют решения в тестирующую систему. Для каждой отправки известно, какой пользователь ее сделал, 
какую задачу он решал и какой ведикт он получил.

Верните список пользователей, у который были только успешные отправки, то есть со статусом "OK". Порядок пользователей значения не имеет.
*/

/*
    problem: "find-developers", 
    user: "max",
    status: "TIME_LIMIT",
*/

const STATUS_OK = 'OK';
function effectiveUsers(submissions) {
  const userResult = {};

  for (const {user, status} of submissions) {
    userResult[user] = userResult[user] ? userResult[user].push(status) : [status];
  }

  Object.entries(userResult)
    .filter(([user, statuses]) => statuses.every( status => status === STATUS_OK))
    .map(([user]) => user)
}