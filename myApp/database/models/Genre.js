module.exports = (sequelize, dataTypes) => {
    let alias = "Genre"

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING
        },
        active: {
            type: dataTypes.INTEGER,
            defaultValue: 1
        },
        created_at: {
            type: dataTypes.DATE,
            defaultValue: dataTypes.NOW
        },
        ranking: {
            type: dataTypes.INTEGER,
            defaultValue: 0
        }
    }

    let config = {
        tableName: "genres",
        timestamps: false,
        underscored: true
    }

    const Genre = sequelize.define(alias, cols, config)

    Genre.associate = models => {
        Genre.hasMany(models.Movie, {
            as: "movies",
            foreignKey: "genre_id"
        })
    }

    return Genre
}