window.onload = function () {
    fetch('http://localhost:3000/api/movies')
        .then(respnse => {
            return respnse.json()
        })
        .then(information => {
            let list = document.querySelector('ul.list')
            let movies = information.data
            
            movies.map(movie => {               
                let element = document.createElement('li')
                let title = document.createElement('h2')
                let deleteForm = document.createElement('form')
                let deleteButton = document.createElement('button')
                let detailForm = document.createElement('form')
                let detailButton = document.createElement('button')
                let editButton = document.createElement('button')
                let editForm = document.createElement('form')

                title.innerHTML = movie.title

                deleteForm.action = `delete/${movie.id}?_method=DELETE`
                deleteForm.method = 'POST'
                deleteButton.type = 'submit'
                deleteButton.innerHTML = 'Eliminar'

                detailForm.action = `${movie.id}`
                detailForm.method = 'GET'
                detailButton.type = 'submit'
                detailButton.innerHTML = 'Ver detalles'
                
                editForm.action = `edit/${movie.id}`
                editForm.method = 'GET'
                editButton.type = 'submit'
                editButton.innerHTML = 'Editar'

                editForm.append(editButton)
                detailForm.append(detailButton)
                deleteForm.append(deleteButton)
                element.append(title)
                element.append(deleteForm)
                element.append(detailForm)
                element.append(editForm)
                list.append(element)
            })

        })
        .catch(error => {
            console.log('ERROR: ', error);
        })

}
