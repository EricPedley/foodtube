let express=require('express');
const cors = require('cors');
var app = express();
app.use(express.json({type:"*/*"}));
app.use(express.static('web/front'));
app.use(cors());
//app.post('/query-recipe', require('query-recipe'));
app.get('/all-recipes', require('./all-recipes'));
app.post('/add-recipes', require('./add-recipes'));
let port = process.env.PORT || 5000
app.listen(port);

console.log(`listening on ${port}`);