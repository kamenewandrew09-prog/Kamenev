const pagination = document.querySelector('.pagination')
const prevPageBtnDOM = document.querySelector('.prev-page')
const currPageDOM = document.querySelector('.curr-page')
const nextPageBtnDOM = document.querySelector('.next-page')
const loadMoreBtnDOM = document.querySelector('.load-more')
const wrapper = document.querySelector('.wrapper')
const mainDOM = document.querySelector('.main')
const searchForm = document.querySelector('.search-form')
const searchForm2 = document.querySelector('.search-form-2')
const searchFormAjax = document.querySelector('.search-form-ajax')
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json', 
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWRhN2JlNjZlZWM3YmUwMjYwMGUxNmJlZjYwM2RiMCIsIm5iZiI6MTc4MjYzNzE3Ny45NzEsInN1YiI6IjZhNDBlMjc5ZDc2ZjViM2ZjMGViODVhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UngRzIXXTx1tvk2gzRf_hqHz-5ozlIuhmW7wKajV9vk'
    }
};

const imagePrefix = 'https://image.tmdb.org/t/p/w342/'

const genresObj = {}
let currentPage = 1
let totalPages;
let isLoading = false
let searchMovieCooldown; 
let searchMovieAjaxCooldown; 

async function getTopRatedMovies(page, isClearPage = true) {
    try {
        isLoading = true
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=uk-UK&page=${page}`, options)
        const data = await response.json()
        const movies = data.results

        currentPage = data.page
        totalPages = data.total_pages
        changePages()

        if (isClearPage) mainDOM.innerHTML = '';

        console.log(movies);
        // mainDOM.innerHTML = ''
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

        isLoading = false 

    } catch (e) {
        console.error(e)
    }
}


// function searchMovie(keyword) {
//     currentPage = 1
//     fetch(`https://api.themoviedb.org/3/search/movie?include_adult=true&language=uk-UK&page=${currentPage}&query=${keyword}`, options)
//       .then(res => res.json())
//       .then(res => {
//         console.log(res)
//         mainDOM.innerHTML = ''
//         mainDOM.classList.add('list')
//       })
//       .catch(err => console.error(err));
// }

function searchMovieAjax(keyword) {
    const proposeWrapper = searchFormAjax.querySelector('.propose-wrapper')
    clearTimeout(searchMovieAjaxCooldown)
    if(keyword.length >= 2) {
        searchMovieAjaxCooldown = setTimeout(() => {
            fetch(`https://api.themoviedb.org/3/search/movie?include_adult=true&language=uk-UK&query=${keyword}`, options)
            .then(res => res.json())
            .then(res => {
                const movies = res.results
                console.log(res)
                proposeWrapper.innerHTML = ''
                if(!movies.length){
                    proposeWrapper.classList.add('hidden')
                } else {
                    proposeWrapper.classList.remove('hidden')
                }
                movies.forEach(movie => {
                    proposeWrapper.insertAdjacentHTML('beforeend', `
                        <div class="search-item-ajax" onclick="getDetails(${movie.id})">${movie.title}</div>
                    `)
                })
            })
            .catch(err => console.error(err));
        }, 1000)
    } else {
        proposeWrapper.innerHTML = ''
        proposeWrapper.classList.add('hidden')
    } 
}


searchForm.addEventListener('submit', event => {
    event.preventDefault()
    const form = event.target
    const searchMovieInput = form.querySelector('.search-movie-input')
    searchMovie(searchMovieInput.value)
})


searchForm2.addEventListener('input', e => {    
    const input = e.target
    if(input.value.length >= 2) {
        clearTimeout(searchMovieCooldown)
        searchMovieCooldown = setTimeout(() => {
            searchMovie(input.value)
        }, 2000)
    }
})

searchFormAjax.addEventListener('input', e => { 
    e.preventDefault()   
    const input = e.target
    searchMovieAjax(input.value)
})


async function getDetails(id) {
    try {
        isLoading = true
        const resp = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=uk-UK`, options);
        isLoading = false 
        const data = await resp.json();
        console.log(data);
        const releaseDate = new Date(data.release_date)
        const formattedDate = releaseDate.toLocaleDateString('uk-UA', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
        pagination.classList.add('hidden-2')
        mainDOM.innerHTML = ''
        mainDOM.insertAdjacentHTML('beforeend', `
            <button class="back-button" onclick="backToMovies()">Назад</button> 
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
        isLoading = false 

    } catch (e) {
        console.error(e);
    }
}

function backToMovies() {
    pagination.classList.remove('hidden-2')
    getTopRatedMovies(1)
}

function changePages() {
    if(currentPage <= 1) {
        prevPageBtnDOM.classList.add("hidden")
    } else {
        prevPageBtnDOM.classList.remove("hidden")
        prevPageBtnDOM.onclick = () => getTopRatedMovies(currentPage - 1)
        prevPageBtnDOM.innerHTML = currentPage - 1
    }
    currPageDOM.innerHTML = currentPage
    if(currentPage >= totalPages) {
        nextPageBtnDOM.classList.add("hidden")
        loadMoreBtnDOM.classList.add("hidden")
    } else {
        loadMoreBtnDOM.classList.remove("hidden")
        loadMoreBtnDOM.onclick = () => getTopRatedMovies(currentPage + 1, false)
        nextPageBtnDOM.classList.remove("hidden")
        nextPageBtnDOM.onclick = () => getTopRatedMovies(currentPage + 1)
        nextPageBtnDOM.innerHTML = currentPage + 1
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
    await getTopRatedMovies(currentPage)
    
}

loadPage()

// window.onscroll = function(e) {
//     const scrollPosition = window.scrollY + window.innerHeight
//     const pageHeight = document.documentElement.scrollHeight

//     if(!isLoading && scrollPosition >= pageHeight - 300) {
//         if(currentPage < totalPages) {
//             getTopRatedMovies(currentPage + 1, false)
//         }
//     }
// }

