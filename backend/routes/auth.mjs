import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import bodyParser from "body-parser";
import { client } from "../connectToDb.mjs";
import dotenv from 'dotenv';
dotenv.config();
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Replace this with your own user model
const usersCollection = client.db("eyekia").collection("users");

// Secret key for JWT
const secretKey = process.env.SECRET;
const saltRounds = 10;

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await usersCollection.findOne({ username: username });

  if (!user) {
    res.status(401).send("Incorrect password or username");
    return;
  }

  bcrypt.compare(password + secretKey, user.password, (err, result) => {
    if (err) throw err;
    if (!result) {
      res.status(401).send("Incorrect password or username");
      return;
    }

    const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: "1h" });
    res.send({ token });
  });
});

router.post("/createuser", async (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const { password, username, email, image, role } = req.body;
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) throw err;

      bcrypt.hash(password + secretKey, salt, (err, hash) => {
        if (err) throw err;
        console.log("Password hash:", hash);
        res.send(hash)
      });
    });
  });
});

export default router;
