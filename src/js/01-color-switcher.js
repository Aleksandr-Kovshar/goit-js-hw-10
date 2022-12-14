function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  elBody: document.querySelector('body'),
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};

refs.btnStop.disabled = true;

refs.btnStart.addEventListener('click', onClickStart);
refs.btnStop.addEventListener('click', onClickStop);

let timerId = null;

function onClickStart() {
  timerId = setInterval(() => {
    refs.elBody.style.background = getRandomHexColor();
  }, 1000);
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;
}

function onClickStop() {
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;
  clearInterval(timerId);
}
