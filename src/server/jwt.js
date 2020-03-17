import jwt from 'jsonwebtoken';
require("dotenv").config();
export const generateJWT = (user) => {
    if (!user) return null;
    return jwt.sign(getUserObject(user), process.env.JWT_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRY
    });
}

export const getUserObject = ({id, email, name, username}) => {
    return{
        name,
        username,
        email,
        userId: id
    }
}