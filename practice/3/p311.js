/*
У нас есть информация о посетителях сайта. Помимо IP-адреса и времени посещения мы получаем 
какую-то информацию об устройстве пользователя (в реальной жизни тоже есть такая возможность — называется user agent).

Каждый визит описан в виде объекта. Гарантируется, что у каждого объекта есть три поля: 
строка ip, строка time и массив info. Массив состоит объектов, в которых всегда два ключа. 
Сам массив может содержать разное количество элементов, в том числе быть пустым.

Для ключа key равного "resolution" в поле value лежит разрешение экрана
Для ключа key равного "browser" в поле value лежит название браузера
Для ключа key равного "os" в поле value лежит название операционной системы
Ваша задача — определить все названия браузеров, из которых посещался сайт, и вернуть массив с их названиями. 
Порядок названий не важен. Каждый браузер должен присутствовать в ответе ровно один раз.
*/

function browserList(visits) {
  return useDeclaration(visits);
}

function useDeclaration(visits) {
  const browsers = visits
    .values()
    .flatMap((visit) => visit.info)
    .filter((item) => item.key === "browser")
    .map((item) => item.value);

  return Array.from(new Set(browsers));
}

// https://developer.mozilla.org/en-US/docs/Glossary/Loop

// NOTE на мой взгляд этот вариант чище
function useLoop(visits) {
  const browsers = new Set();
  for (const { info } of visits) {
    const browserInfo = info.find((item) => item.key === "browser");
    if (browserInfo !== undefined) {
      browsers.add(browserInfo.value);
    }
  }
  return Array.from(browsers);
}

browserList([
  {
    info: [
      {
        key: "browser",
        value: "edge",
      },
    ],
  },
  {
    info: [
      {
        key: "resolution",
        value: "100X100",
      },
      {
        key: "browser",
        value: "firefox",
      },
    ],
  },
]);
