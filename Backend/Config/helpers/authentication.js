const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_KEY || "add the jwt key to the env vars";

module.exports={
    authentication
}
 authenticate = (req, res, next) => {
     //using this if statement to bypass security during testing.
    if(process.env.TESTING_DB){
        next();
    }else{
        const token = req.get('Authorization');
        if(token){
            jwt.verify(token, jwtKey, (err, decoded)=>{
                if(err) return res.status(401).send(`error:${err}`);
                req.decoded = decoded;
                next();
            })
        }else{
            return res.status(401).json({error: "No token provided, must be set on Authorization Header"})
        }
    }
}