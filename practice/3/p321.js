/*
Дан список фильмов, отсортированных по популярности. 
Фильмов может быть произвольное количество. Каждый фильм имеет определенный жанр.

Реализуйте функцию filterMovies(movies, limit), 
которая оставит не более limit фильмов каждого жанра. 
Функция возвращает массив из названий фильмов.

Для каждого жанра мы оставляем те фильмы, которые находятся в рейтинге выше. 
В ответе отфильтрованные фильмы должны идти в том же порядке, в каком они шли в исходном рейтинге.
*/

/*
{
title,
genre,

}
*/

function filterMovies(movies, limit) {
  const counter = {};
  const movieFiltered = [];

  for (const { title, genre } of movies) {
    const currentAmount = counter[genre] ?? 0;

    if (currentAmount < limit) {
      movieFiltered.push(title);
      counter[genre] = currentAmount + 1;
    }
  }

  return movieFiltered;
}
