const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index',{
        title: "Lorhana - Estrutura Básica para Aplicação Node.js Baseada em MVC",
        version: 0
    });
});

module.exports = router;