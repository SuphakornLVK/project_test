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
## next step only copy code from repo only first time
```bash
git remote add origin [link]
git branch -M main
git push -u origin main
```
## When update code
```bash
git add .
git commit -m "message"
git push
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
const morgan = require("morgan"); // Data send log libs
require('dotenv').config() // READ .env

const app = express();

// Middlewares
app.use(cors()); // allow cross from others domains [can config]
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
const PORT = process.env.PORT; // recieve Hidden port from .env
app.listen(PORT, ()=> console.log(`Server is running on Port ${PORT}`));
```

## Step 6 Routing [Auth]

```Javascript
const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");

// @ENDPOINT http://localhost:8000/api/register
router.post("/register", authControllers.register);
router.post("/login", authControllers.login);

//export
module.exports = router;
```
## Step 7 Create  handle error
```Javascript
// Handle Errors (Put this in index.js)
app.use(handleErrors);
// (Put this in index.js)

// error.js
const handleErrors = (err, req, res, next) => {
    //code
    res
    .status(err.statusCode || 500)
    .json({ message: err.message || "Something went wrong!!"})
}

module.exports = handleErrors
// error.js
```
## Always Check

```text
Check Methods - Environment - Is it app.use(...)
Check next var in middlewares (req, res, next)
```
