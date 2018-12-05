const game = {
  title: `Угадай мелодию`,
  rules: [`За 5 минут нужно ответить на все вопросы.`, `Можно допустить 3 ошибки.`],
  fastAnswer: 30,
  maxQuestions: 10
};

const music = [{
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

const levels = {
  '1': {
    type: `artist`,
    audio: music[0].src,
    answers: [
      {
        value: `1`,
        img: music[0].image,
        artist: music[0].artist,
        correct: true
      },
      {
        value: `2`,
        img: music[2].image,
        artist: music[2].artist,
        correct: false
      },
      {
        value: `3`,
        img: music[3].image,
        artist: music[3].artist,
        correct: false
      }
    ]
  },
  '2': {
    type: `artist`,
    audio: music[1].src,
    answers: [
      {
        img: music[2].image,
        artist: music[2].artist,
        correct: false
      },
      {
        img: music[1].image,
        artist: music[1].artist,
        correct: true
      },
      {
        img: music[5].image,
        artist: music[5].artist,
        correct: false
      }
    ]
  },
  '3': {
    type: `artist`,
    audio: music[2].src,
    answers: [
      {
        img: music[2].image,
        artist: music[2].artist,
        correct: true
      },
      {
        img: music[3].image,
        artist: music[3].artist,
        correct: false
      },
      {
        img: music[0].image,
        artist: music[0].artist,
        correct: false
      }
    ]
  },
  '4': {
    type: `artist`,
    audio: music[3].src,
    answers: [
      {
        img: music[1].image,
        artist: `Jingle Punks`,
        correct: false
      },
      {
        img: music[2].image,
        artist: music[2].artist,
        correct: false
      },
      {
        img: music[3].image,
        artist: music[3].artist,
        correct: true
      }
    ]
  },
  '5': {
    type: `artist`,
    audio: music[4].src,
    answers: [
      {
        img: music[5].image,
        artist: music[5].artist,
        correct: false
      },
      {
        img: music[1].image,
        artist: music[1].artist,
        correct: true
      },
      {
        img: music[0].image,
        artist: music[0].artist,
        correct: false
      }
    ]
  },
  '6': {
    type: `genre`,
    genre: `POP`,
    answers: [
      {
        audio: music[4].src,
        genre: music[4].src,
        correct: true,
        autoplay: true
      },
      {
        audio: music[2].src,
        genre: music[2].genre,
        correct: false,
        autoplay: false
      },
      {
        audio: music[2].src,
        genre: music[2].genre,
        correct: false,
        autoplay: false
      },
      {
        audio: music[4].src,
        genre: music[4].genre,
        correct: true,
        autoplay: false
      },
    ]
  },
  '7': {
    type: `genre`,
    genre: `JAZZ`,
    answers: [
      {
        audio: music[2].src,
        genre: music[2].genre,
        correct: false,
        autoplay: true
      },
      {
        audio: music[1].src,
        genre: music[1].genre,
        correct: false,
        autoplay: false
      },
      {
        audio: music[0].src,
        genre: music[0].genre,
        correct: true,
        autoplay: false
      },
      {
        audio: music[5].src,
        genre: music[5].genre,
        correct: false,
        autoplay: false
      }
    ]
  },
  '8': {
    type: `genre`,
    genre: `ROCK`,
    answers: [
      {
        audio: music[2].src,
        genre: music[2].genre,
        correct: false,
        autoplay: true
      },
      {
        audio: music[1].src,
        genre: music[1].genre,
        correct: true,
        autoplay: false
      },
      {
        audio: music[0].src,
        genre: music[0].genre,
        correct: false,
        autoplay: false
      },
      {
        audio: music[1].src,
        genre: music[1].genre,
        correct: true,
        autoplay: false
      },
    ]
  },
  '9': {
    type: `genre`,
    genre: `COUNTRY`,
    answers: [
      {
        audio: music[2].src,
        genre: music[2].genre,
        correct: true,
        autoplay: true
      },
      {
        audio: music[5].src,
        genre: music[5].genre,
        correct: false,
        autoplay: false
      },
      {
        audio: music[2].src,
        genre: music[2].genre,
        correct: true,
        autoplay: false
      },
      {
        audio: music[4].src,
        genre: music[4].genre,
        correct: false,
        autoplay: false
      }
    ]
  },
  '10': {
    type: `genre`,
    genre: `ELECTRONIC`,
    answers: [
      {
        audio: music[4].src,
        genre: music[4].genre,
        correct: false,
        autoplay: true
      },
      {
        audio: music[4].src,
        genre: music[4].genre,
        correct: false,
        autoplay: false
      },
      {
        audio: music[5].src,
        genre: music[5].genre,
        correct: true,
        autoplay: false
      },
      {
        audio: music[5].src,
        genre: music[5].genre,
        correct: true,
        autoplay: false
      }
    ]
  }
};

export {game, levels};
