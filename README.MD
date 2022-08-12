```
Rotas
```
<!--ts-->
   * [**Client**](#Client)
   * [**Deliveryman**](#Deliveryman)
   * [**Deliveries**](#Deliveries)
<!--te-->

### Client
  **POST** basURL/clients/create 

  **POST** baseURL/auth/createAuth
```
 👉 body {
    "username":"nameX",
    "password":"passwordX"
 }
```
-- --

### Deliveryman 

  **POST** baseURL/deliveryman/createDeliveryman
  
  **POST** baseURL/deliveryman/authDeliveryman

```
  👉 body {
    "username":"deliveryMan",
    "password":"deliveryMan"
 }
```

➡️ rotas do deliveryman que precisam de autenticação:
    
    *ensureAuthenticateDeliveryman*

  **GET**   baseURL/deliveryman/findAllAvailable
    
  **PATCH** baseURL/deliveryman/updateDeliveryman/:id

  **PATCH** baseURL/deliveryman/updateEndDate/:id

    👉 params: id_delivery
    const { id: id_delivery } = request.params;

-- --

### Deliveries 

➡️ rotas do delivery que precisam de autenticação

    *ensureAuthenticateClient*

  **POST** baseURL/deliveries/createDelivery

```
  👉 body {
    "item_name": "fish"
  }
```
  **GET** baseURL/deliveries/findAllDeliveries
