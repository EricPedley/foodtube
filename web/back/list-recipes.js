const database=require('./firestore');
module.exports= (req,res) => {
    let data = database.collection("recipes").doc(req.body.query).get().then(doc => {
        console.log(doc.data());
    });
    res.send("hello frontend!");
}