module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('RecipeModels', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        recipeId: {
            type: Sequelize.UUID,
            allowNull: false,
            unique: true,
            primarykey: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
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