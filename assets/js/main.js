const siteUrl = 'https://www.omdbapi.com/';
const searchString = 'ironman';
let moviesList = null;

const createMarkup = () => {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');
  const h1 = document.createElement('h1');

  h1.innerHTML = 'Приложение для поиска фильмов';
  container.append(h1);
// {<h1>Приложение для поиска фильмов</h1>}

document.body.prepend(container);

  moviesList = document.querySelector('.movies');
};

const addMovieToList = (movie) => {
  const item = document.createElement('div');

  item.setAttribute('class', 'movie');

  const img = document.createElement('img');

  img.setAttribute('class', 'movie__image');

  img.setAttribute('src', /^(http|https):\/\//i.test(movie.Poster) ? movie.Poster : 'assets/img/no-image.png');

  img.setAttribute('alt', movie.Title);
  img.setAttribute('title', movie.Title);

  item.append(img);
  moviesList.append(item);
};

const getData = (url) => fetch(url)
.then((res) => res.json())
.then((json) => {
  if (!json || !json.Search) throw Error('Сервер вернул не правильный объект.');
  
  return json.Search;
});

createMarkup();

getData(`$siteUrl}?s=${searchString}&apikey=6bafc949`)
.then((movies) => movies.forEach(movie => addMovieToList(movie)))
.catch((err) => console.error(err));


// timing 31:35