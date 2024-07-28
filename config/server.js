'use strict'

const Env = use('Env')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | HTTP Server Configuration
  |--------------------------------------------------------------------------
  |
  | Configure o servidor HTTP aqui. Defina o host e a porta.
  |
  */

  http: {
    /*
    |--------------------------------------------------------------------------
    | Host
    |--------------------------------------------------------------------------
    |
    | Define o host para o servidor HTTP. Você pode usar `0.0.0.0` para escutar
    | em todas as interfaces disponíveis.
    |
    */
    host: Env.get('HOST', '127.0.0.1'),

    /*
    |--------------------------------------------------------------------------
    | Port
    |--------------------------------------------------------------------------
    |
    | Define a porta para o servidor HTTP.
    |
    */
    port: Env.get('PORT', 3333),

    /*
    |--------------------------------------------------------------------------
    | Outras Configurações HTTP
    |--------------------------------------------------------------------------
    |
    | Outras configurações para o servidor HTTP.
    |
    */
    allowMethodSpoofing: true,
    trustProxy: false,
    subdomainOffset: 2,
    jsonpCallback: 'callback',
    etag: false
  }
}
