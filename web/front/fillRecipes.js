$(document).ready(function() {
    $.push("http://localhost:3000/all-recipes",null,function(response) {
        response.forEach(recipe=>{
            $("#recipes").innerHTML+=recipe.name+":"+JSON.stringify(recipe.ingredients);
        });
    });
});