import content from './game-content';

export const QuestionType = {
  ARTIST: `artist`,
  GENRE: `genre`
};

const songs = [
  {
    artist: `Kevin MacLeod`,
    name: `Long Stroll`,
    image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
    src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
    genre: `Jazz`
  },
  {
    artist: `Jingle Punks`,
    name: `In the Land of Rhinoplasty`,
    image: `https://i.vimeocdn.com/portrait/992615_300x300`,
    src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
    genre: `Rock`
  },
  {
    artist: `Audionautix`,
    name: `Travel Light`,
    image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
    src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
    genre: `Country`
  },
  {
    artist: `Riot`,
    name: `	Level Plane`,
    image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
    src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
    genre: `R&B`
  },
  {
    artist: `Jingle Punks`,
    name: `Lucky Day`,
    image: `https://i.vimeocdn.com/portrait/992615_300x300`,
    src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
    genre: `Pop`
  },
  {
    artist: `Quincas Moreira`,
    name: `Firefly`,
    image: `http://www.atribuna.com.br/fileadmin/_processed_/csm_Quincas-Moreira-Foto-Divulgacao_76d1a8b00e.jpg`,
    src: `https://www.youtube.com/audiolibrary_download?vid=79100e44c826e2f7`,
    genre: `Electronic`
  }
];

export const gameQuestions = [
  {
    type: QuestionType.ARTIST,
    src: songs[0].src,
    question: `${content.artist.question}`,
    answers: {
      'artist-1': {song: songs[0], correct: true},
      'artist-2': {song: songs[1], correct: false},
      'artist-3': {song: songs[2], correct: false}
    }
  },
  {
    type: QuestionType.ARTIST,
    src: songs[1].src,
    question: `${content.artist.question}`,
    answers: {
      'artist-1': {song: songs[1], correct: true},
      'artist-2': {song: songs[3], correct: false},
      'artist-3': {song: songs[4], correct: false}
    }
  },
  {
    type: QuestionType.ARTIST,
    src: songs[2].src,
    question: `${content.artist.question}`,
    answers: {
      'artist-1': {song: songs[2], correct: true},
      'artist-2': {song: songs[3], correct: false},
      'artist-3': {song: songs[1], correct: false}
    }
  },
  {
    type: QuestionType.ARTIST,
    src: songs[3].src,
    question: `${content.artist.question}`,
    answers: {
      'artist-1': {song: songs[0], correct: false},
      'artist-2': {song: songs[4], correct: false},
      'artist-3': {song: songs[3], correct: true}
    }
  },
  {
    type: QuestionType.ARTIST,
    src: songs[4].src,
    question: `${content.artist.question}`,
    answers: {
      'artist-1': {song: songs[5], correct: false},
      'artist-2': {song: songs[4], correct: true},
      'artist-3': {song: songs[0], correct: false}
    }
  },
  {
    type: QuestionType.ARTIST,
    src: songs[5].src,
    question: `${content.artist.question}`,
    answers: {
      'artist-1': {song: songs[3], correct: false},
      'artist-2': {song: songs[2], correct: false},
      'artist-3': {song: songs[5], correct: true}
    }
  },
  {
    type: QuestionType.GENRE,
    question: `Выберите ${songs[3].genre} треки`,
    answers: {
      'answer-1': {song: songs[0], correct: false},
      'answer-2': {song: songs[3], correct: true},
      'answer-3': {song: songs[4], correct: false},
      'answer-4': {song: songs[2], correct: false}
    }
  },
  {
    type: QuestionType.GENRE,
    question: `Выберите ${songs[2].genre} треки`,
    answers: {
      'answer-1': {song: songs[2], correct: true},
      'answer-2': {song: songs[3], correct: false},
      'answer-3': {song: songs[4], correct: false},
      'answer-4': {song: songs[5], correct: false}
    }
  },
  {
    type: QuestionType.GENRE,
    question: `Выберите ${songs[0].genre} треки`,
    answers: {
      'answer-1': {song: songs[4], correct: false},
      'answer-2': {song: songs[2], correct: false},
      'answer-3': {song: songs[3], correct: false},
      'answer-4': {song: songs[0], correct: true}
    }
  },
  {
    type: QuestionType.GENRE,
    question: `Выберите ${songs[4].genre} треки`,
    answers: {
      'answer-1': {song: songs[5], correct: false},
      'answer-2': {song: songs[0], correct: false},
      'answer-3': {song: songs[4], correct: true},
      'answer-4': {song: songs[2], correct: false}
    }
  }
];

export const Time = {
  FAST: 30,
  MAX: 300
};

export const MAX_QUESTIONS = 10;

export const MAX_ERRORS = 3;

const shuffleArray = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    [arr[i - 1], arr[Math.floor(Math.random() * i)]] = [arr[Math.floor(Math.random() * i)], arr[i - 1]];
  }
  return arr;
};

export const initialState = Object.freeze({
  time: Time.MAX,
  lives: 3,
  questions: shuffleArray(gameQuestions),
  level: 0,
  answersArr: []
});
