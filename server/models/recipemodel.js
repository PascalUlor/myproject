export default (sequelize, DataTypes) => {
    const RecipeModel = sequelize.define('RecipeModel', {
        recipeId: { type: DataTypes.UUID, unique: true, primarykey: true },
        title: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        ingredient: { type: DataTypes.STRING },
        views: { type: DataTypes.NUMBER },
        upvote: { type: DataTypes.NUMBER },
        downvote: { type: DataTypes.NUMBER }
    }, {
        classMethods: {
            associate(models) {
                // associations can be defined here
            }
        }
    });
    return RecipeModel;
};