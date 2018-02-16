module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('RecipeModels', {

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
            type: Sequelize.INTEGER
        },
        upvote: {
            type: Sequelize.INTEGER
        },
        downvote: {
            type: Sequelize.INTEGER
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