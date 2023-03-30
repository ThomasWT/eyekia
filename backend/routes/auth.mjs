import express from "express";
import bcrypt from "bcryptjs";
import bodyParser from "body-parser";
import { client } from "../connectToDb.mjs";
import dotenv from 'dotenv';
dotenv.config();

import { tokenValidation, generateToken } from "../token.mjs";

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


const usersCollection = client.db("eyekia").collection("users");

// Secret key for JWT
const secretKey = process.env.SECRET;
const saltRounds = 10;

router.use((req, res, next) => {
  console.log({type: req.method, path: req.path });
  next();
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await usersCollection.findOne({ username: username });

  if (!user) {
    res.status(401).send("Incorrect password or username");
    return;
  }

  bcrypt.compare(password + process.env.SECRET, user.password, (err, result) => {
    if (err) throw err;
    if (!result) {
      res.status(401).send("Incorrect password or username");
      return;
    }

    const token = generateToken(user.id)
    res.send({ token });
  });
});

router.post("/generatepassword", async (req, res) => {
 if(tokenValidation(req.headers.authorization, res)) {
    const { password } = req.body;
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) throw err;

      bcrypt.hash(password + secretKey, salt, (err, hash) => {
        if (err) throw err;
        console.log("Password hash:", hash);
        res.send(hash)
      });
    });
  }
})

router.post("/validatetoken", async (req, res) => {
    tokenValidation(req.body.token, res) ? res.status(200).send("valid") : null
 })

export default router;
