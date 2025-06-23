const {getGeminiResponse} = require('../utils/gemini')
const items = require('../models/product')

async function handleGemini(req,res) {
    try {
        const products = await items.find();
    
        const prompt = `
          Here is the product inventory data with date it was updated:
          ${products.map(p => `name: ${p.name}, category: ${p.category}, stock: ${p.quantity}, price: ${p.price}, updated date: ${p.updatedAt.toDateString()}`).join('\n')}
    
          The updated date indicates when it was last updated (usually the quantity is updated) 
          
          I want you to analyze the entire data and notify me how I could manage my inventory more better 
          (What I should restock, Which item is trending and so on ...). You should include statistical terms like 
          mean, median (these are just examples, use which are relevant) in your output.
          
          I need you to start a new line after talking one point in your output. The points should be one liner. 
          Do not generate more than 4 points. Do not format the output like bold/italic .The output should only contain the analysis part nothing else.
          If no inventory data is provided then return 'Start restocking urgently, entire inventory is empty' as output.   
        `;
    
        const geminiAlerts = await getGeminiResponse(prompt);
        res.render('alerts', { alerts: geminiAlerts.split('\n') }); // assumes alerts.ejs is your file
      } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
      }
}

module.exports = handleGemini