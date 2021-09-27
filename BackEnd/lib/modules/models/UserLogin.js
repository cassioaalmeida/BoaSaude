const { Model, DataTypes } = require('sequelize');
const {sequelize} = require("../../config/sequelize-config")

class UserLogin extends Model {

}

UserLogin.init({
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      default: false
    },
    roleId: {
      model: Role,
      key: 'id',
    }
},
{
    sequelize,
    modelName: 'UserLogin'
})

console.log(UserLogin === sequelize.models.UserLogin);