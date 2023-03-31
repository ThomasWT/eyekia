import jwt from "jsonwebtoken";

function tokenValidation(token, res) {
    if (!token) {
      res.status(401).json({ message: "No token provided" });
    }
    
    if(token) {
      return jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
          res.status(401).json({ message: "Invalid token" });
        } else {
          return true
        }
      });
    }

}

function generateToken(userid, expiresIn="1h",) {
  return jwt.sign({ id: userid }, process.env.SECRET, { expiresIn: expiresIn })
}

export {generateToken, tokenValidation}