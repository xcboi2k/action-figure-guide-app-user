const express = require('express');
const app = express();

app.use('/api', require('./routes/api'));

app.listen(process.env.port || 4000,function(){
    console.log("APP IS READY");
});