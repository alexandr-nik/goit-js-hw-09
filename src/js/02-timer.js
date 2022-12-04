import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';

const optionsFlatpickr = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    getInputDate(selectedDates[0]);
  },
};

function getRefs() {
  return {
    inputDate: document.getElementById('datetime-picker'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
    btnStart: document.querySelector('[data-start]'),
    timer: document.querySelector(".timer"),
    divField: document.querySelector('.field'),
  };
}
const refs = getRefs();

refs.timer.style.display= "flex";
refs.timer.style.gap= '20px';
refs.timer.style.marginTop = '30px';

refs.inputDate.addEventListener(
  'input',
  flatpickr('#datetime-picker', optionsFlatpickr)
);

refs.btnStart.addEventListener('click', timerOn);
refs.btnStart.disabled = true;

let diffDay;

function getInputDate(selectDate) {
  const today = Date.now();
  const inputDay = new Date(selectDate);
  diffDay = inputDay - today;

  if (diffDay <= 1000) {
    Notiflix.Notify.failure('Please choose a date in the future');
  } else {
    Notiflix.Notify.success('Press START');
    changeBtnStatus();
    showTimer(diffDay);
  }
}

function showTimer(day) {
  const { days, hours, minutes, seconds } = convertMs(day);
  refs.days.textContent = `${addLeadingZero(`${days}`)}`;
  refs.hours.textContent = `${addLeadingZero(`${hours}`)}`;
  refs.minutes.textContent = `${addLeadingZero(`${minutes}`)}`;
  refs.seconds.textContent = `${addLeadingZero(`${seconds}`)}`;
}

function changeBtnStatus() {
  refs.btnStart.disabled
    ? (refs.btnStart.disabled = false)
    : (refs.btnStart.disabled = true);
}

function addLeadingZero(value) {
  return value.padStart(2, '0');
}

function timerOn() {
  let day = diffDay;
  changeBtnStatus();
  const idSetInterval = setInterval(() => {
    if (day <= 1000) {
      clearTimeout(idSetInterval);
    }
    showTimer(day);
    day -= 1000;
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
