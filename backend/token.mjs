import jwt from "jsonwebtoken";

export function tokenValidation(token, res) {
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
    
    return jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token" });
      } else {
        return true
      }
    });
}

