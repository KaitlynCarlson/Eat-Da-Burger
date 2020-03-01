"use strict";
const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", (req, res) => {
  burger.selectAll(function(data) {
    const hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.createOne(["burger_name"], [req.body.burger_name], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  const condition = "id = " + req.params.id;
  console.log(req.params.id);
  console.log("condition", condition);
  let state;
  if (req.body.devoured === "true") {
    state = true;
  } else if (req.body.devoured === "false") {
    state = false;
  }
  burger.updateOne(
    {
      devoured: state
    },
    condition,
    function(result) {
      if (result.changedRows == 0) {
        console.log("Error");

        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});
router.delete("/api/burgers/", (req, res) => {
  burger.dropData(function(result) {
    res.status(200).end();
  });
});

module.exports = router;
