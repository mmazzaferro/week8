var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){
    if (err) throw err;
    var dbo = db.db("mydb");
    var items = [
        { id: 1, name: "X", price: 200.00, type: "iPhone", description: "Latest Model from Apple" },
        { id: 2, name: "S8", price: 100.00, type: "Samsung", description: "Not quite latest model from Samsung"},
        { id: 3, name: "Z10", price: 150.00, type: "Blackberry", description: "Not very new but fairly decent model from Blackberry"}
    ];
    dbo.collection("products").insertMany(items, function(err, res){
        if (err) throw err;
        console.log("Number of items inserted: " + res.insertedCount);
        db.close();
    })
})