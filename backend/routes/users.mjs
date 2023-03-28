import { client } from "../connectToDb.mjs";
import express from "express";
import { ObjectId } from "mongodb";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
var router = express.Router();

const usersCollection = client.db("eyekia").collection("users");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    try {
      usersCollection
        .find({}, {
          projection:{ password: 0 }
        })
        .toArray()
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          res.status(404).send("User not found");
        });
    } catch (error) {
      res.status(400).send("Invalid ID");
    }
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  try {
    const objectId = new ObjectId(id);
    usersCollection
      .findOne(
        { _id: objectId },
        {
          projection:{ password: 0 }
        }
      )
      .then((result) => {
        if (result) {
          res.send(result);
        } else {
          res.status(404).send("User not found");
        }
      });
  } catch (error) {
    res.status(400).send("Invalid ID");
  }
});

export default router;
