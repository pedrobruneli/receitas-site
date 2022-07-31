import jwt from 'jsonwebtoken'

export default function createToken(user){
     const payload = {
        id: user._id
     }
     const token = jwt.sign(payload, 'secret', {expiresIn: '1h'});
     return token;
}

export function verifyToken(token) {
   return jwt.verify(token, 'secret');
}