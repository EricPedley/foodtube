const database=require('./firestore');
module.exports= (req,res) => {
    let data = database.collection("recipes").get().then(snapshot => {
        let collection=[];
        snapshot.forEach(doc=>{
            console.log(doc.id, '=>', doc.data());
            collection.push({name:doc.id, data:doc.data()});
            
        });
        res.send(collection);
    });
}