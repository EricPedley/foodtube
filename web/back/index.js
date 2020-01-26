let express=require('express');
const cors = require('cors');
var app = express();
const endpoints = require('./endpoints');
app.use(express.json({type:"*/*"}));
app.use(express.static('../front'));
app.use(cors());
//app.post('/query-recipe', endpoints['query-recipe']);
app.post('/all-recipes', endpoints['all-recipes']);
app.post('/add-recipes', endpoints['add-recipes']);
app.listen(3000);

console.log("listening on port 3000");