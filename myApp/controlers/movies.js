let db = require('../database/models')

let moviesController = {
    list: (req, res) => {
        db.Movie.findAll({
            include: [{association: 'genre'}]
        })
            .then(movies => {
                res.render('./movies/list', { movies })
            })

    },
    detail: (req, res) => {      
        let movieId = req.params.id
        
        db.Movie.findByPk(movieId, {
            include: [{association: 'genre'}, {association: 'actors'}]
        })
            .then(movie => {
                res.render('./movies/detail', { movie })
            })

    },
    create: (req, res) => {
        db.Genre.findAll()
            .then(genres => {
                res.render('./movies/create', { genres })
            })
    },
    saveMovie: (req, res) => {
        let movie = req.body
        
        db.Movie.create({
            title: movie.title,
            awards: movie.awards,
            rating: movie.rating,
            genre_id: movie.genre
        })
        
        res.redirect('list')
    },

    delete: (req, res) => {
        let movieId = req.params.id
        
        db.Movie.destroy({
            where: {
                id: movieId
            }
        })

        res.redirect('/movies/list')
    },
    
    edit: (req, res) => {
        let movieId = req.params.id

        db.Movie.findByPk(movieId)
            .then(movie => {
                db.Genre.findAll()
                    .then(genres => {
                        res.render('./movies/edit', { movie, genres })
                    })
            })

    },

    editSave: (req, res) => {
        let data = req.body
        let movieId = req.params.id

        console.log(data);
        

        db.Movie.update({
            title: data.title,
            rating: data.rating,
            awards: data.awards,
            genre_id: data.genre
        }, 
        {
            where: {
                id: movieId
            }
        })
        

        res.redirect('/movies/list')
    }
}  

module.exports = moviesController