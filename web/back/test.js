var request = require('request');
let data = {
    name: 'PB&J',
    data: {
        ingredients: ["bread","peanut butter","jelly"]
    }
}
// request.post('http://localhost:3000/add-recipes',{ json: data }, function(error,response,body) {
//         console.log(body);
// }
// );
let data2 = {
    query:"PB&J"
};
request.post('http://localhost:3000/list-recipes', {json:data2}, function(error,response,body) {
    console.log(body);
});