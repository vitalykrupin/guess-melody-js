import {MOCK_TIME, MAX_QUESTIONS, MAX_MISTAKES, FAST_TIME} from './constants';
import controller from './controller';
import getGenreScreenElement from './game-genre';
import getArtistScreenElement from './game-artist';
import getFailTriesScreenElement from './fail-tries';
import getFailTimeScreenElement from './fail-time';

export const getElementFromTemplate = (template) => {
  const element = document.createElement(`div`);
  element.innerHTML = template.trim();
  return element.firstChild;
};

export const renderScreen = (element) => {
  const mainElement = document.querySelector(`.main`);
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};

const scorePoints = {
  CORRECT: 1,
  INCORRECT: -2,
  FAST: 2,
};

export const checkAnswerCorrect = (answerEls, correctValue) => {
  return answerEls
    .filter((it) => it.checked)
    .some((it) => {
      return it.value === correctValue;
    });
};

export const renderNextScreen = () => {
  if (controller.state.mistake < MAX_MISTAKES && controller.state.answers.length < MAX_QUESTIONS) {
    const question = controller.getNextQuestion();
    let el;
    switch (question.type) {
      case `genre`:
        el = getGenreScreenElement(question);
        break;
      case `artist`:
        el = getArtistScreenElement(question);
        break;
    }
    renderScreen(el);
  } else if (controller.state.mistake === MAX_MISTAKES) {
    renderScreen(getFailTriesScreenElement());
  } else if (controller.state.time === 0) {
    renderScreen(getFailTimeScreenElement());
  }
};

export const getScorePoints = (answers) => {
  let points = 0;
  if (answers.length > MAX_QUESTIONS) {
    return -1;
  } else {
    answers.forEach((answer) => {
      if (answer.correct) {
        if (answer.time < FAST_TIME) {
          points += scorePoints.FAST;
        } else if (answer.time >= FAST_TIME) {
          points += scorePoints.CORRECT;
        }
      } else {
        points += scorePoints.INCORRECT;
      }
    });
  }
  return points;
};

export const setAnswerTime = () => MOCK_TIME;

export const getFastPoints = (answers) => {
  let fastPoints = 0;
  answers.map((it) => {
    if (it.time < FAST_TIME) {
      fastPoints += 1;
    }
  });
  return fastPoints;
};

export const showStats = (state) => {
  if (state.leftLives === MAX_MISTAKES) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  } else if (state.time === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }

  const stats = [4, 5, 8, 10, 11];
  stats.push(state.points);
  stats.sort((left, right) => right - left);

  const place = stats.indexOf(state.points) + 1;
  const quantity = stats.length;
  const rate = Math.floor((quantity - place) / quantity * 100);

  return `Вы заняли ${place} место из ${quantity} игроков. Это лучше, чем у ${rate}% игроков.`;
};
