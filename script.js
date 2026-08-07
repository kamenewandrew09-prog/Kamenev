const mainDOM = document.querySelector('.main')
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json', 
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWRhN2JlNjZlZWM3YmUwMjYwMGUxNmJlZjYwM2RiMCIsIm5iZiI6MTc4MjYzNzE3Ny45NzEsInN1YiI6IjZhNDBlMjc5ZDc2ZjViM2ZjMGViODVhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UngRzIXXTx1tvk2gzRf_hqHz-5ozlIuhmW7wKajV9vk'
    }
};

const imagePrefix = 'https://image.tmdb.org/t/p/w342/'

const genresObj = {}

async function getTopRatedMovies(page) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=uk-UK&page=${page}`, options)
        const data = await response.json()
        // console.log(data);
        const movies = data.results
        console.log(movies);
        mainDOM.innerHTML = ''
        movies.forEach(movie => {
            mainDOM.insertAdjacentHTML('beforeend', `
                <div class="movie-item" onclick="getDetails(${movie.id})">
                    <div class="genres-wrapper">
                        ${movie.genre_ids.map(genreId => {
                            return `<div class="movie-genre">${genresObj[genreId]}</div>`
                        }).join('<br>')}
                    </div>
                    <div class="movie-item-img-wrapper">
                        <img src="${imagePrefix}${movie.poster_path}" class="movie-item-img">
                    </div>
                    <h2 class="movie-item-title">${movie.title}</h2>
                </div>
            `)
        })

    } catch (e) {
        console.error(e)
    }
}

async function getDetails(id) {
    try {
        const resp = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=uk-UK`, options);
        const data = await resp.json();
        console.log(data);
        const releaseDate = new Date(data.release_date)
        const formattedDate = releaseDate.toLocaleDateString('uk-UA', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
        mainDOM.innerHTML = ''
        mainDOM.insertAdjacentHTML('beforeend', `
            <div class="details-page">
                <div class="movie-details">
                    <div class="movie-details-img-wrapper">
                        <img src="${imagePrefix}${data.poster_path}" class="movie-details-img">
                    </div>
                    <div class="movie-details-info">
                        <div class="movie-details-title">${data.title}</div>
                        <div class="movie-details-original-title">${data.original_title}</div>
                        <div class="movie-details-release-date">Дата виходу: ${formattedDate}</div>
                        <div class="movie-details-budget">Бюджет: ${data.budget}$</div>
                        <div class="movie-details-vote-average">Рейтинг: ${data.vote_average}/10</div>
                        <div class="movie-details-genres">Жанр: ${data.genres.map(genre => {   
                            return genre.name
                        }).join(', ')}
                        </div>
                        <div class="movie-details-production-companies">Продакшн: ${data.production_companies.map(company => {
                            return company.name
                        }).join(', ')}</div>
                    </div>
                    <div class="movie-details-overview">Сюжет Фільму: ${data.overview || "Опис фільму відсутній"}</div>
                </div>
            </div>
        `)


    } catch (e) {
        console.error(e);
    }
}

async function getGenres() {
    const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=uk-UK', options)
    const data = await response.json()
    console.log(data.genres)
    data.genres.forEach(genre => {
        genresObj[genre.id] = genre.name
    })
    console.log(genresObj)
}

async function loadPage() {
    await getGenres()
    await getTopRatedMovies(1)
    
}

loadPage()

