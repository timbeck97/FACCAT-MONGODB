var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://mongodbtimbeck:rkKtEDQyd5JjULyPqHnMy7lTmkw9hIQITWWzfZQuY0uFxY4oB3dy4rs6Uh6huFp6dbt0Xu9kUaXkHNFGt5S8mg==@mongodbtimbeck.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@mongodbtimbeck@";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");

  dbo.collection("customers").deleteOne({'clientes.idCliente':1}, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});