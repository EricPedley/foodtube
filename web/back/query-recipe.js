const database=require('./firestore');
module.exports= (req,res) => {
    let data = database.collection("recipes").doc(req.body.query).get().then(doc => {
        res.send(doc.data());
    });
}