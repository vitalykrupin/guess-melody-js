export const playerGenre = (src) => `
  <div class="track">
    <button class="track__button track__button--play" type="button"></button>
    <div class="track__status">
      <audio src="${src}" preload="auto"></audio>
    </div>
  </div>
`;

export const playerArtist = (src) => `
  <div class="game__track">
    <button class="track__button track__button--play" type="button"></button>
    <audio src="${src}" preload="auto" autoplay></audio>
  </div>
`;
