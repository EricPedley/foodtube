const database=require('./firestore');
module.exports= (req,res) => {
    let data = database.collection("recipes").get().then(snapshot => {
        //console.log(collection);
        let collection = {};
        snapshot.forEach(doc=>{
            console.log(doc.id, '=>', doc.data());
            collection[doc.id]=doc.data();
        })
        res.send(collection);
    });
}