const  btnStart = document.querySelector('[ data-start]');
const btnStop =  document.querySelector('[ data-stop]');

btnStart.addEventListener('click', startChangeColor);
btnStop.addEventListener('click',stopChangeColor);

let timeoutBodyColor = 0;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyBackground() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = `${color}`;
}

function startChangeColor() {
  changeBtnStatus();
  const timeout = setInterval(() => {
    changeBodyBackground();
   }, 1000);
  timeoutBodyColor = timeout;
}

function changeBtnStatus() {
  btnStart.disabled ?  btnStart.disabled = false : btnStart.disabled = true;
 }

 
function stopChangeColor() {
  clearTimeout(timeoutBodyColor);
  changeBtnStatus();
}

