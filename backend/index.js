const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("App is runing...");
    console.log("App is runing...");
})

app.listen(4000);