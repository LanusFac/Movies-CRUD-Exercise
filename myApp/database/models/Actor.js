module.exports = (sequelize, dataTypes) => {
    let alias = 'Actor'

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoincrement: true,
            primaryKey: true
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },
        rating: {
            type: dataTypes.DOUBLE
        },
        favorite_movie_id: {
            type: dataTypes.INTEGER,
            defaultValue: null
        },
        created_at: {
            type: dataTypes.DATE,
            defaultValue: null
        },
        updated_at: {
            type: dataTypes.DATE,
            defaultValue: null
        }
    }

    let config = {
        tableName: "actors",
        timestamps: false,
        underscored: true
    }

    const Actor = sequelize.define(alias, cols, config)
    
    Actor.associate = models => {
        Actor.belongsTo(models.Movie, {
            as: "favorite_movie",
            foreignKey: "favorite_movie_id"
        })
        Actor.belongsToMany(models.Movie, {
            as: 'movies',
            through: 'actor_movie',
            foreignKey: 'actor_id',
            otherKey: 'movie_id',
            timestamps: false
        })
    }

    return Actor
}