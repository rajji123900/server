import AuthService from '../Services/auth';
const get = async (req,res) =>{
    try{
        let user = new AuthService()
        console.log(req.query,"llllllllllll")
         let result = await user.login(req.query)
         console.log(result,"kkkkkk")
    }catch(err){
        res.status(401).json({error:"Unauthorized"})
    }
}
export default get;