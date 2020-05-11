window.onload = function () {
    var id = document.getElementById('scriptMovieId').getAttribute('movieId')

    fetch(`http://localhost:3000/api/movies/${id}`)
        .then(response => {
            return response.json()
        })
        .then(information => {
            fetch('http://localhost:3000/api/genres')
            .then(response => {
                return response.json()
            })
            .then(information => {
                let genres = information.data
                let selectList = document.querySelector('.genreSelect')
    
                genres.map(genre => {
                    let option = document.createElement('option')

                    if(data.genre_id == genre.id) {
                        option.selected = genre.name
                    }

                    option.append(genre.name)
                    option.value = genre.id
                    selectList.append(option)
                })

            })
            .catch(error => {
                console.log('ERROR: ', error)
            })

            let data = information.data
            let list = document.getElementById('editElements')

            
            let titleLi = document.createElement('li')
            let ratingLi = document.createElement('li')
            let awardsLi = document.createElement('li')
            
            let titleInput = document.createElement('input')
            let ratingInput = document.createElement('input')
            let awardsInput = document.createElement('input')


            titleInput.name = 'title'
            titleInput.value = data.title

            ratingInput.name = 'rating'
            ratingInput.type = 'number'
            ratingInput.step = 0.01
            ratingInput.min = 0
            ratingInput.max = 10
            ratingInput.value = data.rating

            awardsInput.name = 'awards'
            awardsInput.type = 'number'
            awardsInput.min = 0
            awardsInput.value = data.awards
            

            titleLi.append('Titulo: ')
            titleLi.append(titleInput)

            ratingLi.append('Rating: ')
            ratingLi.append(ratingInput)

            awardsLi.append('Awards: ')
            awardsLi.append(awardsInput)

            list.append(titleLi)
            list.append(ratingLi)
            list.append(awardsLi)

        })
        .catch(error => {
            console.log('ERRORS: ', error);
        })
}