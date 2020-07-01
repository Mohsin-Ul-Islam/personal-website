const router = require('express').Router();
const downloadsController = require('../controllers/download');

router.route('/resume')
    .get(downloadsController.downloadResume);

module.exports = router;