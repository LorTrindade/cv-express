const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index',{
        title: "Server",
        version: 0
    });
});

module.exports = router;