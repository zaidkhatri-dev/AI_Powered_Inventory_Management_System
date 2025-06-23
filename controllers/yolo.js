const items = require('../models/product')

async function detectItems(req,res) {
    const response = await fetch('http://127.0.0.1:5000/predict');
    const json = await response.json()

    const result = json.result
    
    for (let i = 0; i < result.length; i++) {
        const product = await items.findOne({
            name: result[i].product,
            category: result[i].category,
            price: result[i].price
        })

        if(!product){
            await items.create({
                name: result[i].product,
                category: result[i].category,
                price: result[i].price,
                quantity: result[i].count
            })
            continue;
        }

        const count = product.quantity + result[i].count
        await items.updateOne({
            name: result[i].product,
            category: result[i].category,
            price: result[i].price
        },{
            quantity: count
        })
    
    }
        
    return res.redirect('/dashboard/productlist')
}

module.exports = detectItems