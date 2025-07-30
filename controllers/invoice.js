const PDFDocument = require('pdfkit');

async function generateInvoice(req,res) {
    const data = req.body;
    const items = [{
      name: data.product,
      quantity: parseInt(data.quantity),
      price: parseFloat(data.price)
    }];
    const total = items[0].quantity * items[0].price;
  
    const doc = new PDFDocument();
    const chunks = [];
  
    doc.on('data', (chunk) => chunks.push(chunk));
    doc.on('end', () => {
      const pdfBuffer = Buffer.concat(chunks);
  
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=invoice.pdf');
      res.send(pdfBuffer);
    });
  
    // Build PDF
    doc.fontSize(24).text('Invoice', { align: 'center' });
    doc.moveDown();
    doc.fontSize(14).text(`Customer: ${data.customerName}`);
    doc.text(`Date: ${new Date().toLocaleDateString()}`);
    doc.moveDown();
  
    doc.text('Items:', { underline: true });
    items.forEach((item, index) => {
      doc.text(`${index + 1}. ${item.name} - ${item.quantity} x $${item.price}`);
    });
  
    doc.moveDown();
    doc.text(`Total: $${total}`, { bold: true });
  
    doc.end();
};
module.exports = generateInvoice

