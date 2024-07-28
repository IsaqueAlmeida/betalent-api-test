// app/Models/User.js

const Model = use('Models')
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    //Hash da senha antes de salvar
    this.addHook('beforeCreate', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  static get hidden () {
    return ['password']

  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

}

module.exports = User