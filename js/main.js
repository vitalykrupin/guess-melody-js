'use strict';

const KeyCode = {
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39
};

const screens = Array
  .from(document.querySelectorAll(`template`))
  .map((it) => it.content);

const mainEl = document.querySelector(`.main`);

const showScreen = (screen) => {
  mainEl.innerHTML = ``;
  mainEl.appendChild(screen.cloneNode(true));
};

let current = 0;
const switchScreen = (index) => {
  index = index < 0 ? screens.length - 1 : index;
  index = index >= screens.length ? 0 : index;
  current = index;
  showScreen(screens[current]);
};

switchScreen(0);

const app = document.querySelector(`.app`);
app.insertAdjacentHTML(`beforeend`, `
  <div class="arrows__wrap">
    <style>
      .arrows__wrap {
        position: absolute;
        top: 135px;
        left: 50%;
        margin-left: -56px;
      }
      .arrows__btn {
        background: none;
        border: 2px solid white;
        padding: 5px 20px;
        color: white;
      }
    </style>
    <button class="arrows__btn arrows__btn--left"><-</button>
    <button class="arrows__btn arrows__btn--right">-></button>
  </div>`);

document.addEventListener(`click`, (evt) => {
  const targetClass = evt.target.classList;
  if (targetClass.contains(`arrows__btn--left`)) {
    switchScreen(current - 1);
  } else if (targetClass.contains(`arrows__btn--right`)) {
    switchScreen(current + 1);
  }
});

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case KeyCode.LEFT_ARROW:
      switchScreen(current - 1);
      break;
    case KeyCode.RIGHT_ARROW:
      switchScreen(current + 1);
      break;
  }
});
