const express = require("express");
const router = express.Router();
const Follow = require("../models/Follow");

//getting user following
router.post("/", async (req, res) => {
  await Follow.find({ followerEmail: req.body.email }).count((err, count) => {
    if (err || !count) {
      res.status(200).send(err);
    } else {
      res.status(200).send({ count: count });
    }
  });
});

router.get("/:email", async (req, res) => {
  await Follow.find({ followerEmail: req.params.email }).exec((err, user) => {
    if (err || !user) {
      res.status(200).send(err);
    } else {
      res.status(200).send(user);
    }
  });
});

//getting user followers
router.post("/followers", async (req, res) => {
  await Follow.find({ userEmail: req.body.email }).count((err, count) => {
    if (err || !count) {
      res.status(200).send(err);
    } else {
      res.status(200).send({ count: count });
    }
  });
});

router.get("/followers/:email", async (req, res) => {
  await Follow.find({ userEmail: req.params.email }).exec((err, user) => {
    if (err || !user) {
      res.status(200).send(err);
    } else {
      res.status(200).send(user);
    }
  });
});

//adding follow
router.post("/add", async (req, res) => {
    await Follow.create({
        userEmail: req.body.userEmail,
        followerEmail: req.body.followerEmail
    }).then((res) =>{
        res.status(200).send(res)
    }).catch((err) =>{
        res.send(err);
    })
});

//unfollow

router.post("/unfollow", async (req, res) => {
  await Follow.findOneAndDelete({
    userEmail: req.body.userEmail,
    followerEmail: req.body.followerEmail,
  }).exec((err, result) => {
    if (err || !result) {
      res.status(200).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

module.exports = router;
