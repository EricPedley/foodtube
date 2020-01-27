capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)

$(document).ready(function() {
    console.log("script ran");
    $.get("http://localhost:3000/all-recipes",function(response) {
        console.log(response);
        document.getElementById("recipes").innerHTML+= `<div class = "container">`
        response.forEach(doc=> {
            var recipeName = capitalize(doc.name);
            var ingredients = ""
            doc.data.ingredients.forEach(ingredient=> {
                ingredients += capitalize(ingredient) + ", "
            })
            ingredients = ingredients.substring(0,ingredients.length-2)
            document.getElementById("recipes").innerHTML+=`
            <div class="row" style = "background-color: rgb(235,235,235)">
                <div class="col-sm" style = "border: solid 2px rgb(100,100,100)">
                ${recipeName}<br> Ingredients: ${ingredients}<br><br>
                </div>
            </div>`;
        });
        document.getElementById("recipes").innerHTML+= `</div>`

           
        
    });
});