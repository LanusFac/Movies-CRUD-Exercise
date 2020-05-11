const db = require('../database/models')

let genreController = {
    list: (req, res) => {
        db.Genre.findAll({
            include: [{association: 'movies'}]
        })
            .then(genres => {                                       
                res.render('./genre/list', { genres })
            })
    },
    detail: (req, res) => {
        let id = req.params.id

        db.Genre.findByPk(id, {
            include: [{association: 'movies'}]
        })
            .then(genre => {              
                res.render('./genre/detail', { genre })
            })
    },
    create: (req, res) => {
        res.render('./genre/create')
    },
    saveGenre: (req, res) => {
        let genreName = req.body.genreName
        console.log(genreName);
        
        db.Genre.create({
            name: genreName
        })
            .then(() => {
                res.redirect('/genres/list')
            })
    },
    delete: (req, res) => {
        let genreId = req.params.id

        db.Genre.destroy({
            where: {
                id: genreId
            }
        })
            .then(() => {
                res.redirect('/genres/list')
            })

    },
    edit: (req, res) => {
        let genreId = req.params.id

        db.Genre.findByPk(genreId, {
            include: [{association: 'movies'}]
        })
            .then(genre => {
                res.render('./genre/edit', { genre })
            })
    },
    save: (req, res) => {
        let genreId = req.params.id 
        console.log(req.body);
        
        db.Genre.update({
            name: req.body.genreName
        }, {
            where: {
                id: genreId
            }
        })
            .then(() => {
                res.redirect('/genres/list')
            })
    }
}

module.exports = genreController