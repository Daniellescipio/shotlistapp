const express = require("express");
const Scene = require("../models/scene");

const sceneRouter = express.Router();
// get all scenes

sceneRouter.get("/", (req, res, next) => {
  Scene.find((err, scenes) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(scenes);
  });
});

// get a scene
sceneRouter.get("/:sceneId", (req, res, next) => {
  Scene.findOne({ _id: req.params.sceneId }, (err, scene) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(scene);
  });
});
// delete a Scene
sceneRouter.delete("/:sceneId", (req, res, next) => {
  Scene.findOneAndDelete({ _id: req.params.sceneId }, err => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send("The scene has been deleted");
  });
});
// edit a scene
sceneRouter.put("/:sceneId", (req, res, next) => {
  Scene.findOneAndUpdate(
    { _id: req.params.sceneId },
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
module.exports = sceneRouter;
