const database=require('./firestore');
module.exports= (req,res) => {
    console.log(req.body);
    database.collection('recipes').doc(`${req.body.name}`).set(req.body.data);
    res.send("data has been written");
}