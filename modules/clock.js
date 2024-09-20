const dayOfWeek = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

const mounth = [
  "Января",
  "Февраля",
  "Марта",
  "Апрель",
  "Майя",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];

const clock = () => {
  let date = new Date(),
    hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
    minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
    seconds =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  document.getElementById("clock").innerHTML =
    hours + ":" + minutes + ":" + seconds;
  return date;
};

export function time() {
  const cloacker = setInterval(clock, 1000);
  const day = clock().getDate();
  const currentMounth = clock().getMonth();
  const today = clock().getDay();
  document.getElementById(
    "dayOfWeek"
  ).innerHTML = `${day} ${mounth[currentMounth]}, ${dayOfWeek[today]}`;
  return cloacker;
}
