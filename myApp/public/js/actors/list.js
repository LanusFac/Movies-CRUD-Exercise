const TITLE_ACOTR_LIST = "Lista de acotres"

console.log('primero');

window.onload = function() {
    console.log("segundo")
    fetch('http://localhost:3000/api/actors')
        .then(response => {
            return response.json()
        })
        .then(information => {
            let actors = information.data
            let list = document.querySelector('.list')
            document.querySelector('.title').innerHTML = TITLE_ACOTR_LIST

            actors.map(actor => {               
                let element = document.createElement('li')
                let actorRef = document.createElement('a')
                let title = document.createElement('h3')

                title.innerHTML = actor.first_name + ' ' + actor.last_name
                actorRef.href = `${actor.id}`
                actorRef.append(title)
                element.append(actorRef)
                list.append(element)
            })
        })
        .catch(error => {
            console.log('ERROR: ', error)
        })
}