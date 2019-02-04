import {Time} from '../data/game-data';

export const getRadius = (radius, time) => {
  const stroke = Math.floor(2 * Math.PI * radius);
  const offset = stroke - Math.floor((time / Time.MAX) * stroke);

  return {stroke, offset};
};
