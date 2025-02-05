# Server

## Step 1 Install package

```bash
npm init -y
```

## Step 2 Install lib

```bash
npm install express cors nodemon morgan dotenv bcryptjs prisma jsonwebtoken zod
npx prisma init
```

## Step 3 Create index.js and Git

```bash
git init
git add .
git commit -m "message"
```

## Step 4 edit package.json

```json
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  }
}
```

## Step 5 Update code index.js

```Javascript
// import lib...
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require('dotenv').config() // READ .env

const app = express();

// Middlewares
app.use(cors()); // allow cross domains can config
app.use(express.json()); // read json
app.use(morgan('dev')); // Show req log

//Routing
app.get("/api", (req, res) => {
    // code
    res.json({ message: "Hee, Hee apacha walkin" });
});

app.get("/api/products", (req, res) => {
    console.log("Hello Products");
    res.json({ message: "Hello, Products" });

})


// start server
const PORT = process.env.PORT;
app.listen(PORT, ()=> console.log(`Server is running on Port ${PORT}`));
```

## Step 6 Routing

```Javascript
// Routing รวบรวม ENDPOINT ต่างๆ
const express = require("express");
const route = express.Router()

Router.get('/products', (req, res) => {
    console.log('Hello, GET Product ');
    res.json({ message: "Hello, Product GET" });
});

// exports
module.exports = router;
```

## Always Check

```text
Check Methods - Environment - Is it app.use(...)
Check next var in middlewares (req, res, next)
```
