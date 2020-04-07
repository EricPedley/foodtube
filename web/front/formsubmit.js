function submit() {
    let name = document.getElementById("name").value;
    let ingredients = [];
    Array.from(document.getElementById("ingredients").childNodes).forEach(element=> {
        if(element.value) {
            ingredients.push(element.value);
        }
    });
    let obj = {
        name:name,
        data:{
            ingredients:ingredients
        }
    };
    
    $.post('/add-recipes',JSON.stringify(obj), function(error,response,body) {
            console.log(body);
    }
    );
}
function addIngredient() {
    console.log("adding ingredient");
    let ingredients = [];
    Array.from(document.getElementById("ingredients").childNodes).forEach(element=> {
        if(element.value) {
            ingredients.push(element.value);
        }
    });
    ingredients.push("");
    let content="";
    ingredients.forEach((ing,index)=> {
        content+=`<input type = "text" id = "ingredient${index}" value = "${ing}"><br>`;
    });
    document.getElementById("ingredients").innerHTML=content;
    // let num = document.getElementById("ingredients").childElementCount;
    // console.log(num);
    // document.getElementById("ingredients").innerHTML+=`<input type = "text" id = "ingredient${num+1}"><br>`
}