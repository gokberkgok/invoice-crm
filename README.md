# invoice-crm
## Authentication

All endpoints must have a  **Bearer Token** authorization to use it.  
Header sample:  
`Authorization: Bearer <token>`

---

## Setup
1. Clone this project and go to project path
```bash
https://github.com/gokberkgok/invoice-crm.git
cd invoice-crm
```

2. Install packet
```bash
npm install
```   

3. .env file
```bash
PORT = 5000
DB_HOST = 'localhost'
DB_USER = 'root'
DB_PASSWORD = ''
DB_DATABASE = 'invoice-crm'
JWT_SECRET = 'secrettoken'
``` 

4. Run this project
```bash
node server.js
```
or run with dev (nodemon)
```bash
npm run dev
```

---

## 🛠️Used Technologies

- *Node.js*
- *Express.js*
- *Xampp*
- *Sequelize*
- *MySQL*
- *Express async handler*
- *JWT (jsonwebtoken)*
- *Custom error handler*
- *bcrypt*

---

## API Endpoints

### Customer 

- **GET** `/api/customers/`
  
  *Get all customers*
- **GET** `/api/customers/:id`
  
  *Get Customer by ID*
- **POST** `/api/customers/`
    
  *Create a new customer*
  
  **Request Body:**
    ```json
    {
      "name": "Test",
      "email": "test@gmail.com",
      "phone": "123456"
    }

- **PUT** `/api/customers/:id`
  
  *Update customer from id*

  **Request Body:**
    ```json
    {
      "name": "Test",
      "email": "test@gmail.com",
      "phone": "123456"
    }
- **DELETE** `/api/customers/:id`
  
  *Delete customer from id*

---

### Invoice 

- **GET** `/api/invoices/`
  
  *Get all invoices*
- **GET** `/api/invoices/:id`
  
  *Get Invoice by ID*
- **POST** `/api/invoices/`
    
  *Create a new invoices*
  
  **Request Body:**
    ```json
    {
      "customer_id": 1,
      "amount": 123,
      "description": "test"
    }

- **PUT** `/api/invoices/:id`
  
  *Update invoice from id*

  **Request Body:**
    ```json
    {
      "customer_id": 1,
      "amount": 123,
      "description": "test"
    }
- **DELETE** `/api/invoices/:id`
  
  *Delete invoice from id*

---

### User 

- **GET** `/api/users/`
  
  *Get all users*
- **GET** `/api/users/:id`
  
  *Get User by ID*
- **POST** `/api/users/`
    
  *Create a new users*
  
  **Request Body:**
    ```json
    {
      "name" : "Test",
      "email" : "test@gmail.com"
    }

- **PUT** `/api/users/:id`
  
  *Update user from id*

  **Request Body:**
    ```json
    {
      "name" : "Test",
      "email" : "test@gmail.com"
    }
- **DELETE** `/api/users/:id`
  
  *Delete user from id*
  
- **POST** `/api/users/login`
    
  *Login api, when logged-in, return a bearer token for make an api calls*
  
  **Request Body:**
    ```json
     {
      "email": "test@gmail.com",
      "password" : "123456"
     }

- **POST** `/api/users/register`
    
  *Register api*
  
  **Request Body:**
    ```json
     {
      "name": "Test",
      "email": "test@gmail.com",
      "password" : "123456"
     }

---

## Postman API Collections

- **[Customer]**(https://www.postman.com/winter-capsule-70582/workspace/invoice-crm-api/collection/36620451-25bf3563-7165-4383-95f1-9c27dec38fcb?action=share&creator=36620451)


- **[Invoice]**(https://www.postman.com/winter-capsule-70582/workspace/invoice-crm-api/collection/36620451-c13d7bcc-8a98-4bce-8df9-b6ebeae57308?action=share&creator=36620451)


- **[User]**(https://www.postman.com/winter-capsule-70582/workspace/invoice-crm-api/collection/36620451-022bcd37-0342-4000-88aa-bf2877084307?action=share&creator=36620451)

