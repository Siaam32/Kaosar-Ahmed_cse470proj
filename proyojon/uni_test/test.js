async function run(){
    try{
        await client.connect();
        const shipmentCollection = client.db('ecommerce').collection('shipment');
        app.post('/shipment', async(req, res) => {
            const shipment = req.body;
            const result = await shipmentCollection.insertOne(shipment);
            console.log(result);
            res.json(result);
})
 
    }
    finally{}
}
run().catch(console.dir)