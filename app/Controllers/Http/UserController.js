// app/Controllers/Http/UserController.js
const User = use('App/Models/User')

class UserController {
  async signup ({ request, response }) {
    const data = request.only(['email', 'password'])
    const user = await User.create(data)
    return response.created(user)
  }

  async login ({ request,auth, response }) {
    const { email, password } = request.all()
    const token = await auth.attempt(email, password)
    return response.ok(token)
  }
}

module.exports = UserController
