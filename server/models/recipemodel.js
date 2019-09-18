export default (sequelize, DataTypes) => {
    const RecipeModel = sequelize.define('RecipeModel', {
        recipeId: { type: DataTypes.UUID, unique: true, primarykey: true },
        title: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        ingredient: { type: DataTypes.STRING },
        views: { type: DataTypes.INTEGER },
        upvote: { type: DataTypes.INTEGER },
        downvote: { type: DataTypes.INTEGER }
    }, {
        classMethods: {
            associate(models) {
                RecipeModel.belongsTo(models.user, {
                    foreignKey: 'UserId',
                    onDelete: 'CASCADE'
                });
                // associations can be defined here
            }
        }
    });
    return RecipeModel;
};