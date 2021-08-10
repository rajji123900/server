import jwt from 'jsonwebtoken';

const Authentication = (req,res,next) => {
    try{
        let token = req.headers.Authorization.split('')[1]
        let decode =  jwt.verify(req.headers.Authorization,process.env.JWT_KEY)
        req.userData = decode;
        next()     
    }catch(err){
      res.status(401).json({msg:"unauthorized"})
    }
}
export default Authentication;