// app/Controllers/Http/SaleController.js
const Sale = use('App/Models/Sale')

class SaleController {
  async store ({ request, response }) {
    const data = request.only(['client_id', 'product_id', 'quantity', 'unit_price', 'total_price', 'sale_date'])
    const sale = await Sale.create(data)
    return response.created(sale)
  }
}

module.exports = SaleController
