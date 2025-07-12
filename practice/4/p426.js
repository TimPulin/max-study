/*
Декоратор принимает произвольную функцию и возвращает новую функцию, 
которая делает то же самое, что исходная, но при этом выполняет какие-то дополнительные действия.

Декоратор spy позволяет определить:

сколько раз вызывалась функция;
вызывалась ли функция хотя бы раз с определенным аргументом;
возвращала ли функция хотя бы раз определенное значение.
*/

function spy(fn) {
  const callHistory = createCallHistory();

  function insider(...args) {
    const result = fn(...args);

    callHistory.increaseCount();
    callHistory.addUsedArgs(...args);
    callHistory.addResult(result);

    return result;
  }

  insider.callCount = () => {
    return callHistory.count;
  };

  insider.wasCalledWith = (value) => {
    return callHistory.wasCalledWith(value);
  };

  insider.returned = (value) => {
    return callHistory.returned(value);
  };

  return insider;
}

function createCallHistory() {
  return {
    _count: 0,
    _usedArgs: new Set(),
    _results: new Set(),

    get count() {
      return this._count;
    },

    increaseCount() {
      this._count++;
    },

    addUsedArgs(...args) {
      for (const arg of args) {
        this._usedArgs.add(arg);
      }
    },

    wasCalledWith(value) {
      return this._usedArgs.has(value);
    },

    addResult(value) {
      this._results.add(value);
    },

    returned(value) {
      return this._results.has(value);
    },
  };
}
