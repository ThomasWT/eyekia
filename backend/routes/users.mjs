import { client } from "../connectToDb.mjs";
import express from "express";
import { ObjectId } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

import { tokenValidation } from "../token.mjs";

var router = express.Router();

const usersCollection = client.db("eyekia").collection("users");
if (process.env.NODE_ENV !== 'test') {
router.use((req, res, next) => {
  console.log({type: req.method, path: req.path});
  next();
});
}
/* GET users listing. */
router.get("/", async (req, res, next) => {
  if (tokenValidation(req.headers.authorization, res)) {
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
          res.status(404).send("No results");
        });
    } catch (error) {
      res.status(500).send("Something went wrong");
    }
  }
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
    res.status(400).send("invalid ID. please use /users/{user.id}");
  }
});

export default router;
