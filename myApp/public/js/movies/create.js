window.onload = function() {
    fetch('http://localhost:3000/api/genres')
        .then(response => {
            return response.json()
        })
        .then(information => {
            let genres = information.data
            let selectList = document.querySelector('.genreSelect')

            genres.map(genre => {
                let option = document.createElement('option')

                option.append(genre.name)
                option.value = genre.id
                selectList.append(option)
            })
        })
        .catch(error => {
            console.log('ERROR: ', error)
        })
}
