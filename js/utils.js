const Dictionary = {
  min: [`минуту`, `минуты`, `минут`],
  sec: [`секунду`, `секунды`, `секунд`],
  note: [`ошибку`, `ошибки`, `ошибок`],
  point: [`балл`, `балла`, `баллов`],
  fast: [`быстрый`, `быстрых`, `быстрых`],
};

export const formatWord = (number, item) => {
  const words = Dictionary[item];
  if ((number === 1) || (number > 20 && number % 10 === 1)) {
    return words[0];
  } else if ((number >= 2 && number <= 4) || (number > 20 && number % 10 >= 2 && number % 10 <= 4)) {
    return words[1];
  } else {
    return words[2];
  }
};


const main = document.querySelector(`.app`).querySelector(`.main`);

export const getElementFromTemplate = (template) => new DOMParser().parseFromString(template, `text/html`).body.firstChild;

export const showScreen = (screen) => {
  main.textContent = ``;
  main.appendChild(screen);
};
