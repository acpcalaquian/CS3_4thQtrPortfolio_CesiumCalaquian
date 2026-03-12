let selectedRating = 0

const stars = document.querySelectorAll(".star")

// STAR CLICK
stars.forEach(star => {

    star.addEventListener("click", function(){

        selectedRating = this.dataset.value

        stars.forEach(s => s.classList.remove("yellow"))

        for(let i=0;i<selectedRating;i++){
            stars[i].classList.add("yellow")
        }

    })

})


// LOAD MOVIES WHEN PAGE OPENS
window.onload = function(){
    displayMovies()
}


// ADD / UPDATE MOVIE
document.getElementById("movieForm").addEventListener("submit", function(e){

    e.preventDefault()

    const title = document.getElementById("title").value
    const year = document.getElementById("year").value
    const genre = document.getElementById("genre").value

    let movies = JSON.parse(localStorage.getItem("movies")) || []

    // CHECK IF MOVIE TITLE ALREADY EXISTS
    let existingMovie = movies.find(movie => movie.title.toLowerCase() === title.toLowerCase())

    if(existingMovie){

        // UPDATE INFO
        existingMovie.year = year
        existingMovie.genre = genre

        // AVERAGE RATING
        existingMovie.rating = Math.round((parseInt(existingMovie.rating) + parseInt(selectedRating)) / 2)

    }else{

        // ADD NEW MOVIE
        const movie = {
            title:title,
            year:year,
            genre:genre,
            rating:selectedRating
        }

        movies.push(movie)

    }

    localStorage.setItem("movies", JSON.stringify(movies))

    displayMovies()

    this.reset()

    stars.forEach(s => s.classList.remove("yellow"))

})


// DISPLAY MOVIES
function displayMovies(){

    const movieList = document.getElementById("movieList")

    movieList.innerHTML = ""

    let movies = JSON.parse(localStorage.getItem("movies")) || []

    movies.forEach((movie, index) => {

        const div = document.createElement("div")

        div.className = "movie"

        let starDisplay = ""

        for(let i=0;i<movie.rating;i++){
            starDisplay += "★"
        }

        div.innerHTML = `
        <strong>${movie.title}</strong> (${movie.year}) <br>
        Genre: ${movie.genre} <br>
        Rating: <span class="yellow">${starDisplay}</span> <br>
        <button onclick="deleteMovie(${index})">Delete</button>
        `

        movieList.appendChild(div)

    })

}


// DELETE MOVIE
function deleteMovie(index){

    let confirmDelete = confirm("Are you sure you want to delete this movie?")

    if(confirmDelete){

        let movies = JSON.parse(localStorage.getItem("movies")) || []

        movies.splice(index,1)

        localStorage.setItem("movies", JSON.stringify(movies))

        displayMovies()

    }

}