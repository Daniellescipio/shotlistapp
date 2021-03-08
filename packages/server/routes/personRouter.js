const express = require("express");

const personRouter = express.Router();
const Person = require("../models/person");

// get all people
personRouter.get("/", (req, res, next) => {
  Person.find((err, people) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(people);
  });
});
// get a person
personRouter.get("/:castId", (req, res, next) => {
  Person.findOne({ _id: req.params.castId }, (err, person) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(person);
  });
});
// delete a person
personRouter.delete("/:castId", (req, res, next) => {
  Person.findOneAndDelete({ _id: req.params.castId }, err => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send("The cast member has been deleted");
  });
});
// Add Person
personRouter.post("/", (req, res, next) => {
  const newPerson = new Person(req.body);
  newPerson.save((err, savedPerson) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(savedPerson);
  });
});
// Edit a person
personRouter.put("/:castId", (req, res, next) => {
  Person.findOneAndUpdate(
    { _id: req.params.castId },
    req.body,
    { new: true },
    (err, updatedPerson) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(updatedPerson);
    }
  );
});

module.exports = personRouter;
