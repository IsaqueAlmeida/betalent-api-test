const Route = use('Route')

// rota para testar
Route.get('/', () => {
  return 'Hello, AdonisJs'
})

// Rotas de autenticação
Route.post('signup', 'UserController.signup')
Route.post('login', 'UserController.login')

// Rotas protegidas
Route.group(() => {
  Route.get('clients', 'ClientController.index')
  Route.get('clients/:id', 'ClientController.show')
  Route.post('clients', 'ClientController.store')
  Route.put('clients/:id', 'ClientController.update')
  Route.delete('clients/:id', 'ClientController.delete')

  Route.get('products', 'ProductController.index')
  Route.get('products/:id', 'ProductController.show')
  Route.post('products', 'ProductController.store')
  Route.put('products/:id', 'ProductController.update')
  Route.delete('products/:id', 'ProductController.delete')

  Route.post('sales', 'SaleController.store')
}).middleware(['auth'])
