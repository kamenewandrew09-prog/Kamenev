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
const topRatedBtn = document.querySelector('#topRatedBtn')
const popularBtn = document.querySelector('#popularBtn')
const upcomingBtn = document.querySelector('#upcomingBtn')
const nowPlayingBtn = document.querySelector('#nowPlayingBtn')
const tabs = document.querySelector('.tabs')
const movieTabs = document.querySelectorAll('.movie-tabs')


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
let movieItemTimeout;
let movieItemAddInfo;
let someInfo;

async function getTopRatedMovies(isClearPage = true) {
    const url = new URL(`https://api.themoviedb.org/3/movie/top_rated`)
    url.searchParams.set('language', 'uk=UA')
    url.searchParams.set('page', currentPage)
    getMovies(url)
}

async function getPopularMovies(isClearPage = true) {
    const url = new URL(`https://api.themoviedb.org/3/movie/popular`)
    url.searchParams.set('language', 'uk=UA')
    url.searchParams.set('page', currentPage)
    getMovies(url)
}

async function getUpcomingMovies(isClearPage = true) {
    const url = new URL(`https://api.themoviedb.org/3/movie/upcoming`)
    url.searchParams.set('language', 'uk=UA')
    url.searchParams.set('page', currentPage)
    getMovies(url)
}

async function getNowPlayingMovies(isClearPage = true) {
    const url = new URL(`https://api.themoviedb.org/3/movie/now_playing`)
    url.searchParams.set('language', 'uk=UA')
    url.searchParams.set('page', currentPage)
    getMovies(url)
}

async function showAddInfo(id, movieItem) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=uk-UK`, options)
    const data = await response.json();
    clearInterval(movieItemTimeout);
    movieItemTimeout = setTimeout(() => {
        if (someInfo === id) {
            return   
        }
        someInfo = id
        console.log('...запит...')
        movieItemAddInfo = document.createElement('div')
        movieItemAddInfo.classList.add('movie-item-add-info')
        movieItemAddInfo.insertAdjacentHTML('beforeend', `
            <div class="show-info-details-title">Назва фільму: ${data.title}</div>
            <div class="show-info-details-vote-average">Рейтинг: ${data.vote_average}</div>
            <div class="show-info-details-release-date">Дата виходу: ${data.release_date}</div>
            <div class="show-info-details-genres">Жанр: ${data.genres.map(genre => {return genre.name}).join(', ')}</div>
        `)
        movieItem.append(movieItemAddInfo)
    }, 500)
}

function removeInfo() {
    if(movieItemAddInfo) {
        movieItemAddInfo.remove()
    }  
}

async function getMovies(url, isClearPage = true) {
    try {
        isLoading = true
        const response = await fetch(url, options)
        const data = await response.json()
        const movies = data.results

        currentPage = data.page
        totalPages = data.total_pages
        changePages()

        if (isClearPage) mainDOM.innerHTML = '';

        console.log(movies);
        // mainDOM.innerHTML = ''
        movies.forEach(movie => {
            const stars = Math.ceil(movie.vote_average / 2)
            let rating = ''
            for(let i = 1; i <= 5; i++) {
                if(i <= stars) {
                    rating += '★'
                } else {
                    rating += '☆'
                }
            }

            const movieItem = document.createElement('div')
            movieItem.classList.add("movie-item")
            movieItem.onclick = () => getDetails(movie.id)
            movieItem.onmousemove = () => showAddInfo(movie.id, movieItem)
            movieItem.onmouseleave = () => removeInfo()
            movieItem.insertAdjacentHTML('beforeend', `
                <div class="genres-wrapper">
                    ${movie.genre_ids.map(genreId => {
                        return `<div class="movie-genre">${genresObj[genreId]}</div>`
                    }).join('<br>')}
                </div>
                <div class="rating">
                    ${rating}
                </div>
                <div class="movie-item-img-wrapper">
                    <img src="${imagePrefix}${movie.poster_path}" class="movie-item-img">
                </div>
                <h2 class="movie-item-title">${movie.title}</h2>
            `);

            mainDOM.insertAdjacentElement('beforeend', movieItem)
        })
        pagination.classList.remove('hidden')
        searchFormAjax.classList.remove('hidden')
        tabs.classList.remove('hidden')
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
//        })
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
                if(movies.length === 0){
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


topRatedBtn.addEventListener('click', () => {
    getTopRatedMovies(currentPage)
})

popularBtn.addEventListener('click', () => {
    getPopularMovies(currentPage)
})

upcomingBtn.addEventListener('click', () => {
    getUpcomingMovies(currentPage)
})

nowPlayingBtn.addEventListener('click', () => {
    getNowPlayingMovies(currentPage)
})

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
    input = searchFormAjax.querySelector('.search-form-input')
    searchMovieAjax(input.value)
})

movieTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        movieTabs.forEach(tab => {
            tab.classList.remove('active')
        })

        tab.classList.add('active')
    })
})
    


async function getDetails(id) {
    try {
        isLoading = true
        tabs.classList.add('hidden')
        searchFormAjax.classList.add('hidden')
        pagination.classList.add('hidden')
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
        mainDOM.innerHTML = ''
        mainDOM.insertAdjacentHTML('beforeend', `
            <button class="back-button" onclick="getTopRatedMovies(1)">Назад</button> 
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



