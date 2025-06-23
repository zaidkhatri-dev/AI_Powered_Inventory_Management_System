const items = require('../models/product')

async function showAnalysis(req,res){
    const itemArr = await items.find();
    const valueArr = []
    const categArr = [];
    
    itemArr.forEach(prod => {
        if(categArr.indexOf(prod.category) === -1){
            categArr.push(prod.category)
        }
    })

    for (let i = 0; i < categArr.length; i++) {
        valueArr.push(0);    
    }

    itemArr.forEach(prod => {
        const idx = categArr.indexOf(prod.category)
        valueArr[idx] = prod.quantity*prod.price
    })



    return res.render('analysis',{
        stock: valueArr,
        category: categArr
    })
}

module.exports = showAnalysis