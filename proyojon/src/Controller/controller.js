const Product=async(req, res) =>{
    console.log('query', req.query);
    const page = parseInt(req.query.page);
    const size = parseInt(req.query.size);

    const query = {};
    const cursor = productCollection.find(query);
    let products;
    if(page || size){
        // 0 --> skip: 0 get: 0-10(10): 
        // 1 --> skip: 1*10 get: 11-20(10):
        // 2 --> skip: 2*10 get: 21-30 (10):
        // 3 --> skip: 3*10 get: 21-30 (10):
        products = await cursor.skip(page*size).limit(size).toArray();
    }
    else{
        products = await cursor.toArray();
    }
    
    res.send(products);
}
const productCount= async(req, res) =>{
    const count = await productCollection.estimatedDocumentCount();
    res.send({count});
}
const productKeys=async(req, res) =>{
    const keys = req.body;
    const ids = keys.map(id => ObjectId(id));
    const query = {_id: {$in: ids}}
    const cursor = productCollection.find(query);
    const products = await cursor.toArray();
    console.log(keys);
    res.send(products);
}

  module.exports = {
    Product,productCount,productKeys
   
  }