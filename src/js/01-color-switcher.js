function getRefs() {
  return {
    btnStart: document.querySelector('[ data-start]'),
    btnStop: document.querySelector('[ data-stop]'),
  };
}

let timeoutBodyColor = 0;

refs = getRefs();

refs.btnStart.addEventListener('click', startChangeColor);
refs.btnStop.addEventListener('click',stopChangeColor);


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
  refs.btnStart.disabled ?  refs.btnStart.disabled = false : refs.btnStart.disabled = true;
 }

 
function stopChangeColor() {
  clearTimeout(timeoutBodyColor);
  changeBtnStatus();
}

