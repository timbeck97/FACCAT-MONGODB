var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://mongodbtimbeck:rkKtEDQyd5JjULyPqHnMy7lTmkw9hIQITWWzfZQuY0uFxY4oB3dy4rs6Uh6huFp6dbt0Xu9kUaXkHNFGt5S8mg==@mongodbtimbeck.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@mongodbtimbeck@";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
    
 
  dbo.collection("customers").insertOne(geraVenda(), function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });



  
});

function geraVenda(){
    return{
        clientes:{
            idCliente:1,
            nomeEmpresa:'Tim Ltda',
            endereco:[{
                idEndereco:1,
                idCliente:1,
                rua:'Lageado',
                cidade:'Nova Hartz',
                cep:'93890000',
                pais:'Brasil',
                telefone:'51999659865'
            }]  ,
            pedidos:[{
                numeroPedido:4,
                idCliente:1,
                dataPedido:new Date(),
                dataDespacho:new Date(),
                itens:[{
                    numeroPedido:4,
                    numeroProduto:4,
                    numeroItem:2,
                    preco:4800,
                    quantidade:2,
                    produto:{
                        numeroProduto:4,
                        nomeProduto:'TV',
                        quantidadeUnidade:2,
                        precoUnitario:1200,
                    }
                }]
            },
            {
                numeroPedido:4,
                idCliente:3,
                dataPedido:new Date(),
                dataDespacho:new Date(),
                itens:[{
                    numeroPedido:4,
                    numeroProduto:5,
                    numeroItem:2,
                    preco:402,
                    quantidade:2,
                    produto:{
                        numeroProduto:3,
                        nomeProduto:'Tenis',
                        quantidadeUnidade:2,
                        precoUnitario:100.5,
                    }
                }]
            }
            ],
                    
              
             
        }

    }
}