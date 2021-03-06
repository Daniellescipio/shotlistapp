const express = require("express");
const Shot = require("../models/shot");

const shotRouter = express.Router();
// get all shots

shotRouter.get("/", (req, res, next) => {
  Shot.find((err, shots) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(shots);
  });
});

// get a shot
shotRouter.get("/:shotId", (req, res, next) => {
  Shot.findOne({ _id: req.params.shotId })
    .populate("scene")
    .exec((err, shot) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(shot);
    });
});
// get all the shots from a scene
shotRouter.get("/:sceneId/shots", (req, res, next) => {
  Shot.find({ scene: req.params.sceneId })
    .populate("scene")
    .exec((err, shots) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(shots);
    });
});

// edit a shot
shotRouter.put("/:shotId", (req, res, next) => {
  Shot.findOneAndUpdate(
    { _id: req.params.shotId },
    req.body,
    { new: true },
    (err, updatedScene) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(updatedScene);
    }
  );
});
module.exports = shotRouter;
