const express = require("express");

const productionRouter = express.Router();
const Production = require("../models/production");
const Scene = require("../models/scene");
const Person = require("../models/person");
const Shot = require("../models/shot");

// get all productions
productionRouter.get("/", (req, res, next) => {
  Production.find((err, productions) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(productions);
  });
});
// get a production
productionRouter.get("/:productionId", (req, res, next) => {
  Production.findOne({ _id: req.params.productionId })
    .populate("scenes")
    .populate("people")
    .populate("shots")
    .exec((err, production) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      console.log(production.people);
      return res.status(200).send(production);
    });
});
// add a production
productionRouter.post("/", (req, res, next) => {
  const newProduction = new Production(req.body);
  newProduction.save((err, savedProduction) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(savedProduction);
  });
});
// add a new scene
productionRouter.put("/:productionId/addScene", (req, res, next) => {
  const newScene = new Scene(req.body);
  Production.findOneAndUpdate(
    { _id: req.params.productionId },
    { $push: { scenes: newScene } },
    { new: true },
    (err, updatedProduction) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      newScene.save();
      return res.status(200).send(updatedProduction);
    }
  );
});
// add an existing scene
productionRouter.put("/:productionId/:sceneId/addScene", (req, res, next) => {
  const existingScene = req.params.sceneId;
  Production.findOneAndUpdate(
    { _id: req.params.productionId },
    { $push: { scenes: existingScene } },
    { new: true },
    (err, updatedProduction) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(updatedProduction);
    }
  );
});
// add a new person
productionRouter.put("/:productionId/addPerson", (req, res, next) => {
  const newPerson = new Person(req.body);
  Production.findOneAndUpdate(
    { _id: req.params.productionId },
    { $push: { people: newPerson } },
    { new: true },
    (err, updatedProduction) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      newPerson.save();
      return res.status(200).send(updatedProduction);
    }
  );
});
// add an existing person
productionRouter.put("/:productionId/:personId/addPerson", (req, res, next) => {
  const existingPerson = req.params.personId;
  Production.findOneAndUpdate(
    { _id: req.params.productionId },
    { $push: { people: existingPerson } },
    { new: true },
    (err, updatedProduction) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(updatedProduction);
    }
  );
});
// add a new shot
productionRouter.put("/:productionId/:sceneId/addShot", (req, res, next) => {
  req.body.scene = req.params.sceneId;
  const newShot = new Shot(req.body);
  Production.findOneAndUpdate(
    { _id: req.params.productionId },
    { $push: { shots: newShot } },
    { new: true },
    (err, updatedProduction) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      newShot.save();
      return res.status(200).send(updatedProduction);
    }
  );
});
// add an exisiting shot
productionRouter.put("/:productionId/:personId/addPerson", (req, res, next) => {
  const existingPerson = req.params.personId;
  Production.findOneAndUpdate(
    { _id: req.params.productionId },
    { $push: { people: existingPerson } },
    { new: true },
    (err, updatedProduction) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(updatedProduction);
    }
  );
});
// remove a scene
productionRouter.put(
  "/:productionId/:sceneId/removeScene",
  (req, res, next) => {
    Production.findOneAndUpdate(
      { _id: req.params.productionId },
      { $pull: { scenes: req.params.sceneId } },
      { new: true },
      (err, updatedProduction) => {
        if (err) {
          res.status(500);
          return next(err);
        }
        Scene.remove({ _id: req.params.sceneId });
        return res.status(200).send(updatedProduction);
      }
    );
  }
);
// remove a person
productionRouter.put(
  "/:productionId/:personId/removePerson",
  (req, res, next) => {
    Production.findOneAndUpdate(
      { _id: req.params.productionId },
      { $pull: { people: req.params.personId } },
      { new: true },
      (err, updatedProduction) => {
        if (err) {
          res.status(500);
          return next(err);
        }
        return res.status(200).send(updatedProduction);
      }
    );
  }
);
// remove a shot
productionRouter.put("/:productionId/:shotId/removeShot", (req, res, next) => {
  Production.findOneAndUpdate(
    { _id: req.params.productionId },
    { $pull: { shots: req.params.shotId } },
    { new: true },
    (err, updatedProduction) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      Shot.remove({ _id: req.params.shotId });
      return res.status(200).send(updatedProduction);
    }
  );
});
// delete a production
productionRouter.delete("/:productionId", (req, res, next) => {
  Production.findOneAndDelete({ _id: req.params.productionId }, err => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send("The production has been deleted");
  });
});
// edit a production
productionRouter.put("/:productionId", (req, res, next) => {
  Production.findOneAndUpdate(
    { _id: req.params.productionId },
    req.body,
    { new: true },
    (err, updatedProduction) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(updatedProduction);
    }
  );
});

module.exports = productionRouter;
