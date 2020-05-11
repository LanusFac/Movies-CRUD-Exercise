const GENRE_LIST_TITLE = "Bienvenid@ a la seccion de generos!!"

window.onload = function () {
    fetch('http://localhost:3000/api/genres')
        .then(response => {
            return response.json()
        })
        .then(information => {
            let genres = information.data
            
            document.querySelector('h1.title').innerHTML = GENRE_LIST_TITLE

            let list = document.querySelector('ul.list')
            genres.map(genre => {         
                let element = document.createElement('li')
                let genreNameTitle = document.createElement('h3')
                let moviesArr = genre.movies

                genreNameTitle.innerHTML = genre.name
                element.append(genreNameTitle)

                if(moviesArr) {
                    let moviesList = document.createElement('ul')

                    moviesArr.map(movie => {
                        let movieElement = document.createElement('li')
                        let reference = document.createElement('a')

                        reference.innerHTML = movie.title
                        reference.href = `/movies/${movie.id}`
                        movieElement.append(reference)
                        moviesList.append(movieElement)
                    })
                    element.append(moviesList)
                }

                list.append(element)
            })

        })
        .catch(error => {
            console.log('ERRORS: ', error)
            alert('ERRORS: ', error)
        })
}
