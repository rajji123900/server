import AuthService from '../Services/auth';

const user = async (req,res) =>{
    try{
        let user = new AuthService()
        let result = await user.register(req.body)
        console.log(result)
        if(result){
            res.status(200).json({msg:'Successfully registered'})
        }
    }catch(err){
        res.status(409).json({error:'Sequelize Validation Error'})
    }
}
export default user;