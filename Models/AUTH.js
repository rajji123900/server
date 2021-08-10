import  axios  from 'axios';
import Sequelize from 'sequelize';
import AuthSchema from '../Schemas/AUTH'
 class Auth {
    constructor(){
        this.AuthSchema = AuthSchema(sequelize, Sequelize)
    }

    async create(obj) {
        return await this.AuthSchema.create({
            ...obj
        });
    }

    async read(email){
        console.log(email,";;;;;;;;;;;;;;")
        return await this.AuthSchema.findOne({
            where:email
        })
    }
}
export default Auth;

