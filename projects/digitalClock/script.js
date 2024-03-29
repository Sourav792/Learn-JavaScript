function clock() {
  const hours = document.querySelector("#hours");
  const minutes = document.querySelector("#minutes");
  const seconds = document.querySelector("#seconds");
  const meridiem = document.querySelector("#meridiem");

  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let ampm = h <= 12 ? "AM" : "PM";

  if (h > 12) {
    h = h - 12;
  }
  h = h < 10 ? ` 0${h}` : h;
  m = m < 10 ? ` 0${m}` : m;
  s = s < 10 ? ` 0${s}` : s;
  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
  meridiem.innerText = ampm;
}

setInterval(clock, 1000);
