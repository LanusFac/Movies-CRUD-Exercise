let db = require('../../database/models')

let genreApiController = {
    list: (req, res) => {
        db.Genre.findAll({
            include: [{association: 'movies'}]
        })
            .then(genres => {
                let answord = {
                    meta: {
                        status: 200,
                        total_genres: genres.length,
                        url: '/api/genres'
                    },
                    data: genres
                }


                res.json(answord)
            })
    }
}

module.exports = genreApiController