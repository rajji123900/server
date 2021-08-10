import axios from 'axios';

class User {
    constructor(){
        this.AuthSchema = Sequelize.import('../Schemas/user')
    }

    async create(obj) {
     return await this.AuthSchema.create({
         ...obj
     });
    }
}
export default User;

