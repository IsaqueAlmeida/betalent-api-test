// app/Controllers/Http/ProductController.js
const Product = use('App/Models/Product')

class ProductController {
  async index ({ response }) {
    const products = await Product.query().where('is_deleted', false).orderBy('name', 'asc').fetch()
    return response.ok(products)
  }

  async show ({ params, response }) {
    const product = await Product.findOrFail(params.id)
    return response.ok(product)
  }

  async store ({ request, response }) {
    const data = request.only(['name', 'price'])
    const product = await Product.create(data)
    return response.created(product)
  }

  async update ({ params, request, response }) {
    const product = await Product.findOrFail(params.id)
    const data = request.only(['name', 'price'])
    product.merge(data)
    await product.save()
    return response.ok(product)
  }

  async delete ({ params, response }) {
    const product = await Product.findOrFail(params.id)
    product.is_delete = true
    await product.save()
    return response.noContent()
  }
}

module.exports = ProductController
