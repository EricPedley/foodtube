$(document).ready(function() {
    console.log("script ran");
    $.get("http://localhost:3000/all-recipes",function(response) {
        console.log(response);
        response.forEach(doc=> {
            document.getElementById("recipes").innerHTML+=doc.name+":"+JSON.stringify(doc.data);
        });
        
           
        
    });
});