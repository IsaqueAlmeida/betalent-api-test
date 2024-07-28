// app/Controllers/Http/ClientController.js
const Client = use('App/Models/Client')

class ClientController {
  async index ({ response }) {
    const clients = await Client.query().with('addresses').with('phones').orderBy('id', 'asc').fetch()
    return response.ok(clients)
  }

  async show ({ params, response }) {
    const client = await Client.query().with('addresses').with('phones').with('sales').where('id', params.id).firstOrFail()
    return response.ok(client)
  }

  async store ({ request, response }) {
    const data = request.only(['name', 'cpf'])
    const client = await Client.create(data)
    return response.create(client)
  }

  async update ({ params, request, response }) {
    const client = await Client.firstOrFail(params.id)
    const data = request.only(['name', 'cpf'])
    client.merge(data)
    await client.save()
    return response.ok(client)
  }

  async delete ({ params, response }) {
    const client = await Client.findOrFail(params.id)
    await client.delete()
    return response.noContent()
  }
}

module.exports = ClientController
