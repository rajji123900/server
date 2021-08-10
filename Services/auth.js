import {Auth} from '../Models/index';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config()

class AuthService{
    constructor(){
      
    }
    async register(obj){
        try{
            let auth = new Auth();
            let hash = bcrypt.hashSync(obj.password, 10);
                    let payload = {
                        email:obj.email,
                        first_name:obj.username,
                        last_name:"",
                        password:hash
                    }
                    let data = await auth.create({
                        ...payload
                    }) 
                    if(data){
                        return true;
                    }
        }catch(err){
            throw new Error('Sequelize validation err')
        }
    }

    async login(obj){
        try{
            let user = new Auth();
            let data=await user.read({
                'email':obj.email
            })
            if(data){
                let {email,password,id} = data.dataValues
                let result = bcrypt.compareSync(obj.password, password);
                    if(result){
                        const token = jwt.sign({
                        email: email,
                        id:id
                        },process.env.JWT_KEY,{
                            expiresIn:'1h'
                        })
                        return true
                    }
                    else if(err){ 
                        throw new Error('error')
                    }else{
                        throw new Error('error')
                    }
            }
            else{
                throw new Error('error')
            }
        }catch(err){
            throw new Error('error')
        }

    }

}
export default AuthService;