const items = require('../models/product')

async function displayAllItems(req,res){
    const productArr = await items.find({});
    res.render('product-list.ejs',{
        all: productArr
    })};

async function formInput(req,res) {
    const formData = req.body;

    const data = await items.findOne({
        name: formData.name,
        category: formData.category,
    })

    if(!data){
        await items.create({
            name: formData.name,
            category: formData.category,
            price: formData.price,
            quantity: formData.quantity
        })

        return res.redirect('/dashboard/productlist')
    }

    await items.updateOne({
        name: formData.name,
        category: formData.category
    },{
        price: formData.price,
        quantity: formData.quantity
    })

    return res.redirect('/dashboard/productlist')
}

async function formItemDel(req,res){
    const formData = req.body;

    await items.findOneAndDelete({
        name: formData.name,
        category: formData.category
    })

    return res.redirect('/dashboard/productlist')
}

module.exports = {
    displayAllItems,
    formInput,
    formItemDel
}