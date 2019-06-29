const express = require('express');
const router = express.Router();
const db = require('../models/index');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.user.findAll({}).then((instances) => {
    res.send(instances);
  });
});

module.exports = router;
