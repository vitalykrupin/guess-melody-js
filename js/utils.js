const FAST_TIME = 30;

export const getElementFromTemplate = (template) => {
  const element = document.createElement(`div`);
  element.innerHTML = template.trim();
  return element.firstChild;
};

export const renderScreen = (element) => {
  const mainEl = document.querySelector(`.main`);
  mainEl.innerHTML = ``;
  mainEl.appendChild(element);
};

const scorePoints = {
  CORRECT: 1,
  INCORRECT: -2,
  FAST: 2
};

export const setScorePoints = (answers, lives) => {
  let points = 0;

  if (answers.length < 10 || lives === 0) {
    return -1;
  }

  answers.forEach((answer) => {
    if (answer.correct) {
      if (answer.time < FAST_TIME) {
        points += scorePoints.FAST;
      } else {
        points += scorePoints.CORRECT;
      }
    } else {
      points += scorePoints.INCORRECT;
    }
  });
  return points;
};

export const showStats = (gameResult, stats) => {
  if (gameResult.lives === 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  } else if (gameResult.time === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }

  stats.push(gameResult.points);
  stats.sort((left, right) => right - left);

  const place = stats.indexOf(gameResult.points) + 1;
  const quantity = stats.length;
  const rate = Math.floor((quantity - place) / quantity * 100);

  return `Вы заняли ${place} место из ${quantity} игроков. Это лучше, чем у ${rate}% игроков.`;
};
