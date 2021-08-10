import  Sequelize  from "sequelize";
console.log(sequelize)
const AuthSchema = function() {
    return sequelize.define("AUTH", {
    id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    email: {
        type:Sequelize.STRING,
        allowNull: false,
      },
    first_name: {
      type:Sequelize.STRING,
      allowNull: false,
    },
    last_name: {
      type:Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type:Sequelize.STRING,
      allowNull: false,
    }
  },
    {
      defaultScope:{
        attributes:{exclude:[]}
      },
    tableName:'AUTH',
    timestamps:false
  })}

  export default AuthSchema;
  
  