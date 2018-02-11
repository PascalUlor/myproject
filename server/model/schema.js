SCHEMA
Database Name = more-recipe
Tables = User, recipe
User = {
	userId : PRIMARY INTEGER
	firstName : NOT NULL VARCHAR(50)
	lastName : NOT NULL VARCHAR(50)
	email: NOT NULL UNIQUE VARCHAR(50)
	password : NOT NULL VARCHAR(50)
	favorite : VARCHAR(50)
}
User.associate = (models) => {
    User.hasMany(models.recipe, {
      foreignKey: 'userId',
      as: 'userRecipe',
    });
  };

recipe = {
	recipeId : PRIMARY INTEGER
	title : NOT NULL VARCHAR(60)
	description : NOT NULL UNIQUE TEXT
	ingredient : NOT NULL TEXT
	views: INTEGER
		   defaultValue : 0;
    upvote: INTEGER
    		defaultValue : 0;
    downvote : INTEGER
    		   defaultValue : 0;
}
recipe.associate = (models) => {
    recipe.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };

  return recipe;
};