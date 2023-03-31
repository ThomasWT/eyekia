import { client } from "../connectToDb.mjs";
import express from "express";
import { tokenValidation } from "../token.mjs";
import cors from "cors";
router.use(cors());
var router = express.Router();

const usersCollection = client.db("eyekia").collection("stats");
if (process.env.NODE_ENV !== 'test') {
router.use((req, res, next) => {
  console.log({type: req.method, path: req.path});
  next();
});
}

/* GET users listing. */
router.get("/overview/kpis", async (req, res, next) => {
  if (tokenValidation(req.headers.authorization, res)) {
    try {
      usersCollection
        .find({
            "name" : {
            "$in" : 
              [
                "Sales online", 
               "Sales In Stores",
               "Social engagements",
               "Solved support tickets"
              ]
           } 
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

/* GET users listing. */
router.get("/socials/kpis", async (req, res, next) => {
  if (tokenValidation(req.headers.authorization, res)) {
    try {
      usersCollection
        .find({
            "name" : {
            "$in" : 
              [
                "Likes", 
               "Followers",
               "Social Engagements",
               "Referrals"
              ]
           } 
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

export default router;
