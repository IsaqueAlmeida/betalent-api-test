# BeTalent API

## Introdução
 - Este projeto é uma solução para o Teste Técnico Back-end da BeTalent, que consiste em estruturar uma API RESTful conectada a um banco de dados. O sistema permite o cadastro de usuários, clientes, produtos e vendas. As funcionalidades incluem autenticação JWT, CRUD para clientes e produtos, além do registro de vendas.

## Tecnologias Utilizadas
 - Node.js v18.10.0;
 - AdonisJS Framework;
 - MySQL;
 - Lucid ORM (AdonisJS);
 - JWT para autenticação;
 - Migrations para gerenciamento do banco de dados.

## O que foi criado?
 - **Modelos**: Definem a estrutura e os relacionamentos dos dados no banco de dados.
 - **Controladores**: Contêm a lógica de negócios e interagem com os modelos para manipular os dados.
 - **Rotas**: Definem os endpoints da API e os controladores correspondentes.
 - **Autenticação**: Implementação de autenticação JWT para proteger as rotas.
 - **Migrations**: Scripts para criar e gerenciar as tabelas do banco de dados.

# **Estrutura do Projeto**
  Estrutura do projeto segue o padrão MVC (Model-View-Controller), onde:
    
  - **Modelos**: Definem a estrutura e os relacionamentos dos dados no banco de dados. Estão localizados na pasta `app/Models`;
  - **Controladores**: Contêm a lógica de negócios e interagem com os modelos para manipular os dados. Estão localizados na pasta `app/Controllers/Http`;
  - **Rotas**: Definem os endpoints da API e os controladores correspondentes. Estão configuradas no arquivo `start/routes.js`

# **Observações**
  - *Todas as rotas, exceto `/signup` e `/login`, requeiram autenticação JWT.*

## Requisitos

- Node.js v18.10.0
- NPM
- MySQL

## Instalação

1. Clone o repositório:
    ```bash
    git clone <seu-repositorio>
    cd betalent-api

2. Instale as dependências:
    ```bash
    npm install

3. Configure o banco de dados em `.env`:
    ``` DB_CONNECTION=mysql
        DB_HOST=127.0.0.1
        DB_PORT=3306
        DB_USER=seu_usuario
        DB_PASSWORD=sua_senha
        DB_DATABASE=betalent_db
    ```

4. Execute as migrações:
    ```bash
    adonis migration:run

5. Inicie o servidor:
    ```bash 
    adonis serve --dev

# Rotas

## Autenticação
  - **POST**/signup: Cadastro de usuário
    - Request Body:
        ```
        {
          "email": "seu_email",
          "password": "sua_senha"
        }
    - Response:
        ```
          {
            "id": "seu_id",
            "email": "seu_email",
            "created_at": "data_criação",
            "updated_at": "data_atualizada"
          }
        ```
  - **POST**/**login**: login de usuário
    - Request Body:
        ```
        "email": "seu_email",
        "password": "sua_senha"
        ```
    - Response:
        ```
        {
          "type": "bearer",
          "token": "seu_token",
          "refreshToken": null,
          "expiresIn": null,
        }
# **Clientes**
  
  - **GET**/clients: Listar todos os clientes
    - Response:
        ```
        [
          {
            "id": "seu_id",
            "name": "seu_nome",
            "cpf": "seu_cpf",
            "addresses": [],
            "phones": []
          }
        ]
        ```
  - **GET**/clients/
  : Detalhar cliente e suas vendas
    - Response:
        ```
        {
          "id": "seu_id",
          "name": "seu_nome",
          "cpf": "seu_cpf",
          "addresses": [],
          "phones": [],
          "sales": []
        }
        ```
  - **POST/clients**: Adiciona cliente
    - Request Body:
        ```
        {
          "name": "seu_nome",
          "cpf": "seu_cpf"
        }
        ```
    - Response:
        ```
        {
          "id": "seu_id",
          "name": "seu_nome",
          "cpf": "seu_cpf",
          "created_at": "data_criação",
          "updated_at": "data_atualização"
        }
        ```
  - **PUT/clients/** :Editar cliente
    - Request Body:
        ``` 
        {
          "name": "seu_nome"
          "cpf": "seu_cpf"
        }
        ```
    - Response:
        ```
        {
          "id": "seu_id",
          "name": "seu_nome",
          "cpf": "seu_cpf",
          "updated_at": "sua_atualização"
        }
        ```
  - **DELETE/clients/** :Excluir cliente
    - Response: `204 No Content`

# **Produtos**
  
  - **GET/products** :Listar todos os produtos
    - Response
        ```
        [
          {
            "id": "seu_id",
            "name": "seu_nome",
            "price": "preço_produto"
          }
        ]
        ```
  - **GET/products/** :Detalhar produtos
    - Response:
        ```
        {
          "id": "seu_id",
          "name": "seu_nome",
          "price": "preço_produto",
          "created_at": "criação_produto",
          "updated_at": "atualização_produto"
        }
        ```
  - **POST/products** :Adicionar produto
    - Request Body:
        ```
        {
          "name": "nome_produto",
          "price": "preço_produto",
        }
        ```
    - Response:
        ```
        {
          "id": "id_produto",
          "name": "name_produto",
          "price": "preço_produto",
          "created_at": "adicionar_produto",
          "updated_at": "atualizar_produto"
        }
        ```
  - **PUT/products/** :Editar produto
    - Request Body:
        ```
        {
          "name": "nome_produto",
          "price": "preço_produto"
        }
        ```
    - Response:
        ```
        {
          "id": "id_produto",
          "name": "nome_produto",
          "price": "preço_produto",
          "update_at": "atualizar_produto"
        }
        ```
  - **DELETE/products/** :Exclusão do produto
    - Response: `204 No content`
# **Vendas**
  - **POST/sales** :Registrar vendas
    - Request Body:
        ```
        {
          "client_id": "id_cliente",
          "product_id": "id_produto",
          "quantity": "quantidade_produto",
          "unit_price": "preço_produto",
          "total_price": "total_pedido",
          "sale_date": "data_venda"
        }
        ```
    - Response:
        ```
        {
          "id": "id_produto",
          "client_id": "cliente_id",
          "product_id": "produto_id",
          "quantity": "quantidade_produto",
          "unit_price": "preço_produto",
          "total_price": "total_preço_produto",
          "sale_date": "data_venda",
          "created_at": "nova_venda",
          "updated_at": "atualizado_venda"
        }
        ```

# **Exemplo de Modelos**
  **User.js**
  ```const Model = use('Model')
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }
}

module.exports = User
```

  **Client.js**
  ```const Model = use('Model')

class Client extends Model {
  addresses() {
    return this.hasMany('App/Models/Address')
  }

  phones() {
    return this.hasMany('App/Models/Phone')
  }

  sales() {
    return this.hasMany('App/Models/Sale')
  }
}

module.exports = Client
```

## Exemplo de Controladores
  
  **UserController.js**
  ```const User = use('App/Models/User')

class UserController {
  async signup({ request, auth, response }) {
    const userData = request.only(['email', 'password'])
    const user = await User.create(userData)
    const token = await auth.generate(user)
    return response.json({ user, token })
  }

  async login({ request, auth, response }) {
    const { email, password } = request.all()
    const token = await auth.attempt(email, password)
    return response.json({ token })
  }
}

module.exports = UserController
```
  **ClientController.js**
  ```const Client = use('App/Models/Client')

class ClientController {
  async index ({ response }) {
    const clients = await Client.query().with('addresses').with('phones').fetch()
    return response.json(clients)
  }

  async show ({ params, response }) {
    const client = await Client.query().where('id', params.id).with('addresses').with('phones').with('sales').first()
    return response.json(client)
  }

  async store ({ request, response }) {
    const data = request.only(['name', 'cpf'])
    const client = await Client.create(data)
    return response.status(201).json(client)
  }

  async update ({ params, request, response }) {
    const client = await Client.find(params.id)
    const data = request.only(['name', 'cpf'])
    client.merge(data)
    await client.save()
    return response.json(client)
  }

  async delete ({ params, response }) {
    const client = await Client.find(params.id)
    await client.delete()
    return response.noContent()
  }
}

module.exports = ClientController
```

# Dificuldades Encontradas
  
  - Pelo pouco tempo que tenho de experiência, pensei que não fosse concluir a tempo;
  - Framework diferente do que eu usava, pois, era mais voltado para o Front-End;
  - Sem experiência na área trabalhando em empresas, só em projetos pessoais;
  - Ainda não tinha trabalhado com o Adonis.js. Essa foi a primeira vez; e
  - Leitura da documentação e buscando exemplos para conseguir fazer a maioria das coisas pedidas no desafio;

# Motivação no Desafio
  - Por gostar de ser desafiado, achei muito legal em poder trabalhar neste teste;
  - Por ter aprendido e ganhado ainda mais conhecimento no Back-end;
  - Ter colocado os meus conhecimentos a prova;
  - Ter buscado em vários sites e documentações para poder concluir a maior parte pedida;
  - E, por último, por terem me dado essa chance grandiosa de participar do Desafio Técnico.
      