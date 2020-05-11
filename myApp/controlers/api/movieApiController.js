let db= require('../../database/models')

let moviesControler = {
    list: (req, res) => {
        db.Movie.findAll({
            include:[{association: "genre"}]
        })
            .then(movies => {
                for (let i = 0; i < movies.length; i++) {
                    movies[i].setDataValue("endpoint", "/api/movies/" + movies[i].id)
                }

                let answord = {
                    meta: {
                        status: 200,
                        total_movies: movies.length,
                        url: '/api/movies'
                    },
                    data: movies
                }
                
                res.json(answord)
            })
    },

    detail: (req, res) => {      
        db.Movie.findByPk(req.params.id, {
            include:[{ association: 'genre' }]
        })
            .then(movie => {
                let answord = {
                    meta: {
                        status: 200,
                        url: `/api/movies/${movie.id}`
                    },
                    data: movie
                }
                res.json(answord)
            })
    },
    
}

module.exports = moviesControler