module.exports = (sequelize, dataTypes) => {
    let alias = "Movie"
    
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        title: {
            type: dataTypes.STRING
        },
        rating: {
            type: dataTypes.DOUBLE
        },
        awards: {
            type: dataTypes.INTEGER
        },
        genre_id: {
            type: dataTypes.INTEGER
        },
        created_at: {
            type: dataTypes.DATE,
            defaultValue: null
        },
        updated_at: {
            type: dataTypes.DATE,
            defaultValue: null
        },
        release_date: {
            type: dataTypes.DATE,
            defaultValue: '2008-07-04 00:00:00'
        },
        length: {
            type: dataTypes.INTEGER,
            defaultValue: null
        }
    }

    let config = {
        tableName: "movies",
        timestamps: false,
        underscored: true
    }

    const Movie = sequelize.define(alias, cols, config)

    Movie.associate = models => {
        Movie.belongsTo(models.Genre, {
            as: "genre",
            foreignKey: "genre_id"
        })
        Movie.hasMany(models.Actor, {
            foreignKey: "favorite_movie_id"
        })
        Movie.belongsToMany(models.Actor, {
            as: 'actors',
            through: 'actor_movie',
            foreignKey: 'movie_id',
            otherKey: 'actor_id',
            timestamps: false
        })
    }

    return Movie
}