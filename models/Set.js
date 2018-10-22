"use strict";

module.exports = function(sequelize, DataTypes) {
    const Set = sequelize.define("Set", {
        setID : { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        code : DataTypes.STRING,
        series: DataTypes.STRING,
        totalCards: DataTypes.INTEGER,
        standardLegal: DataTypes.BOOLEAN,
        releaseDate: DataTypes.STRING
    });

    Set.associate = function(models) {
        Set.hasMany(models.Card, {
            foreignKey: "setId",
            onDelete: 'cascade'
        });
    };

    return Set;
};
