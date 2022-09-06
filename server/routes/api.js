const express = require('express');
const router = express.Router();

router.get('/ninjas', function(req,res){
    res.send({type: 'GET'});
});
