let db = require('../../database/models')

let actorsApiController = {
    list: (req, res) => {
        db.Actor.findAll({
            include:[{association: "favorite_movie"}]
        })
            .then(actors => {
                let answord = {
                    meta: {
                        status: 200,
                        total_actors: actors.length,
                        url: '/api/actors'
                    },
                    data: actors
                }
                res.json(answord)
            })
    },
    detail: (req, res) => {
        
    }
}

module.exports = actorsApiController