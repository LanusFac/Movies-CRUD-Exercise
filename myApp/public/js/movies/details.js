let api = `http://localhost:3000/api`

window.onload = function () {
    let path = location.pathname

    fetch(api + path)
        .then(response => {
            return response.json()
        })
        .then(information => {
            let movie = information.data
            let detailList = document.querySelector('.detailList')
            
            document.querySelector('.title').innerHTML = movie.title

            let elementRating = document.createElement('div')
            let rating = movie.rating
            elementRating.append("Rating: ")
            elementRating.append(rating)
            detailList.append(elementRating)

            let elemtntAwards = document.createElement('div')
            let awards = movie.awards
            elemtntAwards.append("Awards: ")
            elemtntAwards.append(awards)
            detailList.append(elemtntAwards)

            let elementGenre = document.createElement('div')
            let genre = movie.genre.name
            elementGenre.append("Genre: ")
            elementGenre.append(genre)
            detailList.append(elementGenre)

            let deleteForm = document.createElement('form')
            let deleteButton = document.createElement('button')

            deleteForm.action = `delete/${movie.id}/?_method=DELETE`
            deleteForm.method = 'POST'
            deleteButton.type = 'submit'
            deleteButton.innerHTML = 'Eliminar'
            deleteForm.append(deleteButton)
            detailList.append(deleteForm)

            let editForm = document.createElement('form')
            let editButton = document.createElement('button')

            editForm.action = `edit/${movie.id}`
            editForm.method = 'GET'
            editButton.type = 'submit'
            editButton.innerHTML = 'Editar'
            editForm.append(editButton)
            detailList.append(editForm)
        })
        .catch(error => {
            console.log('ERROR: ', error)
            alert('ERROR')
        })
}