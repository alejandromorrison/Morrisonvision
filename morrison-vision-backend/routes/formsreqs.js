const express = require('express');
const router = express.Router();

// to use the template on the views
router.get('/', (req, res) => {
    res.render('formsreqs');
});

module.exports = router;