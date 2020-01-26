let express=require('express');
const cors = require('cors');
var app = express();
const endpoints = require('./endpoints');
app.use(express.json({type:"*/*"}));
app.use(express.static('../front'));
app.use(cors());
app.post('/list-recipes', endpoints['list-recipes']);
app.post('/add-recipes', endpoints['add-recipes']);
app.listen(3000);

console.log("listening on port 3000");