const db = require('../database/models')

let actorsController = {
    list: (req, res) => {
        db.Actor.findAll()
            .then(actors => {
                res.render('./actors/list', { actors })
            })
    },
    detail: (req, res) => {
        let actorId = req.params.id

        db.Actor.findByPk(actorId, {
            include: [{association: 'favorite_movie'}, {association: 'movies'}]
        })
            .then(actor => {
                res.render('./actors/detail', { actor })
            })
    },
    edit: (req, res) => {
        let actorId = req.params.id

        db.Actor.findByPk(actorId)
            .then(actor => {
                res.render('./actors/edit', { actor })
            })
    },
    editSave: (req, res) => {
        let actorId = req.params.id
        let body = req.body
        
        db.Actor.update({
            first_name: body.actorFirstName,
            last_name: body.actorLastName
        },{
            where: {
                id: actorId
            }
        })
        .then(() => {
            res.redirect('/actors/list')
        })
    },
    create: (req, res) => {
        res.render('./actors/create')
    },
    save: (req, res) => {
        let firstName = req.body.actorFirstName
        let lastName = req.body.actorLastName

        db.Actor.create({
            first_name: firstName,
            last_name: lastName
        })
            .then(() => {
                res.redirect('/actors/list')
            })
    },
    delete: (req, res) => {
        let actorId = req.params.id

        db.Actor.destroy({
            where: {
                id: actorId
            }
        })
            .then(() => {
                res.redirect('/actors/list')
            })
    }
}

module.exports = actorsController