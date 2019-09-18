export default (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        userId: { type: DataTypes.UUID, allowNull: false },
        firstName: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING, allowNull: false },
        email: {
            type: DataTypes.STRING, allowNull: false, unique: true, isEmail: true
        },
        password: { type: DataTypes.STRING, allowNull: false },
        favorite: { type: DataTypes.STRING }
    }, {
        classMethods: {
            associate(models) {
                user.hasMany(models.RecipeModel, {
                    foreignKey: 'UserId',
                    onDelete: 'CASCADE'
                });
                // associations can be defined here
            }
        }
    });
    return user;
};