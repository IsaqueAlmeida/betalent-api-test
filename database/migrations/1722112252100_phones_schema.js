// database/migrations/1722112252100_phones_schema.js
const Schema = use('Schema')

class PhonesSchema extends Schema {
  up () {
    this.create('phones', (table) => {
      table.increments()
      table.integer('client_id').unsigned().references('id').inTable('clients')
      table.string('number', 20).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('phones')
  }
}

module.exports = PhonesSchema
