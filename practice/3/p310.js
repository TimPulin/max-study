/*
  {
    ip: "111.23.65.96",
    time: "12:31:56",
    info: [
      {key: "resolution", value: "1280x800"},
      {key: "browser", value: "Safari"},
    ]
  },
*/

function browserList(visits) {
  const browsers = visits
    .map(visit => visit.info)
    .filter((item) => item.key === 'browser')
    .map(item => item.value);

    return new Set(browsers);
}
