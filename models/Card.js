"use strict";

module.exports = function(sequelize, DataTypes) {
    const Card = sequelize.define("Card", {
        cardId : { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name : DataTypes.STRING,
        nationalPokedexNumber: DataTypes.INTEGER,
        imageUrl: DataTypes.STRING,
        subtype: DataTypes.STRING,
        supertype: DataTypes.STRING,
        ability: DataTypes.STRING,
        ancientTrait: DataTypes.STRING,
        hp: DataTypes.INTEGER,
        number: DataTypes.INTEGER,
        artist: DataTypes.STRING,
        rarity: DataTypes.STRING,
        series: DataTypes.STRING,
        set:  DataTypes.STRING,
        setCode: DataTypes.STRING,
        retreatCost: DataTypes.STRING,
        text: DataTypes.STRING,
        types: DataTypes.STRING,
        attacks: DataTypes.STRING,
        weaknesses: DataTypes.STRING,
        resistances: DataTypes.STRING,
        foil: DataTypes.BOOLEAN
    });

    Card.associate = function(models) {
        Card.belongsTo(models.Set, {
            foreignKey: "setId",
            onDelete: 'cascade'
        });
    };

    return Card;
};
