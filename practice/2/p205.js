/*
В формате массива пар задается плейлист. Пара состоит из песни и ее продолжительности. 
Необходимо вернуть продолжительность всего плейлиста в формате HH:MM:SS.
Если плейлист длится меньше часа, ответ должен быть в формате MM:SS. Если хотя бы 1 час, то HH:MM:SS.
 */

// [[name, duration]]

function playlistDuration(playlist) {
  const totalSeconds = playlist.reduce(
    (total, [, duration]) => total + calcSeconds(duration),
    0
  );

  const duration = calcDuration(totalSeconds);
  return formatDuration(duration);
}

function formatTime(value) {
  return String(value).padStart(2, "0");
}

const SEC_IN_MINUTE = 60;
const MINUTE_IN_HOUR = 60;
const SEC_IN_HOUR = SEC_IN_MINUTE * MINUTE_IN_HOUR;

function calcSeconds(str) {
  [seconds = 0, minutes = 0, hours = 0] = str.split(":").map(Number).reverse();

  return seconds + minutes * SEC_IN_MINUTE + hours * SEC_IN_HOUR;
}

function calcDuration(totalSeconds) {
  const hours = Math.floor(totalSeconds / SEC_IN_HOUR);
  const minutes = Math.floor((totalSeconds % SEC_IN_HOUR) / SEC_IN_MINUTE);
  const seconds = totalSeconds % SEC_IN_MINUTE;

  return {
    hours,
    minutes,
    seconds,
  };
}

function formatDuration({ hours, minutes, seconds }) {
  const time = hours > 0 ? [hours, minutes, seconds] : [minutes, seconds];
  return time.map((item) => formatTime(item)).join(":");
}
