let router = require('express').Router();
let indexController = require('../controllers/index');

/* GET home page. */
router.route('/')
  .get(indexController.renderHomePage);

module.exports = router;
