import jwt from 'jsonwebtoken';
require("dotenv").config();
export const auth = (req, res, next) => {
    
    
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;
    
    if (req.body.userId && req.body.userId !== userId) {
      res.status(401).json({
        error: new Error('Invalid user ID!')
      });
    } else {
      next();
    }
  } catch(e) {
      console.log('error----', e);
      
    res.status(401).json({
        error: 'Invalid Request!'
    });
  }
};