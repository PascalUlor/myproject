export default (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User', {
            firstName: { type: DataTypes.STRING, allowNull: false },
            lastName: { type: DataTypes.STRING, allowNull: false },
            email: {
                type: DataTypes.STRING, allowNull: false, unique: true, isEmail: true
            },
            password: { type: DataTypes.STRING, allowNull: false },
            favorite: { type: DataTypes.STRING }
        },
        {
            classMethods: {
                associate(models) {
                // associations can be defined here
                }
            }
        }
    );
    return User;
};

//
'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('RecipeModels', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        Id: {
            type: Sequelize.NUMBER
        },
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        ingredient: {
            type: Sequelize.STRING
        },
        views: {
            type: Sequelize.NUMBER
        },
        upvote: {
            type: Sequelize.NUMBER
        },
        downvote: {
            type: Sequelize.NUMBER
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        }
    }),
    down: (queryInterface, Sequelize) => queryInterface.dropTable('RecipeModels')
};

//
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../server/config/config.json`)[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
    .readdirSync(__dirname)
    .filter(file =>
        (file.indexOf('.') !== 0) &&
        (file !== basename) &&
        (file.slice(-3) === '.js'))
    .forEach((file) => {
        const model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
