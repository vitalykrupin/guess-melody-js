import data from './data';

export const showResults = (statistics, gameResult) => {
  if (gameResult.time <= 0) {
    return `${data.result.timeLose}`;
  }
  if (gameResult.lives <= 0) {
    return `${data.result.loseStat}`;
  }
  const userPoints = gameResult.UserPoint;
  const points = statistics.map((item) => item.points);
  points.push(userPoints);
  points.sort((a, b) => b - a);
  const players = points.length;
  const place = points.indexOf(userPoints) + 1;
  const rate = (players - place) / players * 100;

  return `Вы заняли ${place} место из ${players} игроков. Это лучше, чем у ${rate}% игроков`;
};
