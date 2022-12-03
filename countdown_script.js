const countDownDate1 = new Date("Feb 22, 2023 21:13:59").getTime();
const countDownDate2 = new Date("Dec 10, 2022 21:13:59").getTime();

const x = setInterval(function () {
  const now = new Date().getTime();

  const distance = countDownDate1 - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
  }
}, 1000);

const y = setInterval(function () {
  const now = new Date().getTime();

  const distance = countDownDate2 - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".days2").innerHTML = days;
  document.querySelector(".hours2").innerHTML = hours;
  document.querySelector(".minutes2").innerHTML = minutes;
  document.querySelector(".seconds2").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(y);
  }
}, 1000);
