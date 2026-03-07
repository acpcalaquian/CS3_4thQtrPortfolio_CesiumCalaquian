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


// ADD MOVIE
document.getElementById("movieForm").addEventListener("submit", function(e){

    e.preventDefault()

    const title = document.getElementById("title").value
    const year = document.getElementById("year").value
    const genre = document.getElementById("genre").value

    const movie = {
        title:title,
        year:year,
        genre:genre,
        rating:selectedRating
    }

    let movies = JSON.parse(localStorage.getItem("movies")) || []

    movies.push(movie)

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

    movies.forEach(movie => {

        const div = document.createElement("div")

        div.className = "movie"

        let starDisplay = ""

        for(let i=0;i<movie.rating;i++){
            starDisplay += "★"
        }

        div.innerHTML = `
        <strong>${movie.title}</strong> (${movie.year}) <br>
        Genre: ${movie.genre} <br>
        Rating: <span class="yellow">${starDisplay}</span>
        `

        movieList.appendChild(div)

    })

}