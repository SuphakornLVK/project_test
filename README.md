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

## Step 9 Create prisma in configs
```Javascript
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports = prisma;
```

## Step 10 Validators
```Javascript
const { z } = require("zod");

// Test Validation
exports.registerSchema = z
  .object({
    email: z.string().email("Email is not correct"),
    firstname: z.string().min(3, "Firstname must be more than 3 characters"),
    lastname: z.string().min(3, "Lastname must be more than 3 characters"),
    password: z.string().min(6, "Password must be more than 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Password must be more than 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password is not match",
    path: ["confirmPassword"],
  });

exports.loginSchema = z
  .object({
    email: z.string().email("Email is not correct"),
    password: z.string().min(6, "Password must be more than 6 characters"),
  });

exports.validateWithZod = (schema) => (req, res, next) => {
  try {
    console.log("Hello Middlewares");
    schema.parse(req.body);
    next();
  } catch (error) {
    const errMsg = error.errors.map(item => item.message);
    const errTxt = errMsg.join(",");
    const mergeError = new Error(errTxt);
    next(mergeError);
  }
};
```

## Step 11 Current User
```Javascript
const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");
const { registerSchema, loginSchema, validateWithZod } = require("../middlewares/validators");


// @ENDPOINT http://localhost:8000/api/register
router.post(
    "/register",
    validateWithZod(registerSchema),
    authControllers.register
);
router.post(
    "/login", 
    validateWithZod(loginSchema), 
    authControllers.login
);

router.get(
    "/current-user",
    authControllers.currentUser
)

//export
module.exports = router;
```

## Always Check

```text
Check Methods - Environment - Is it app.use(...)
Check next var in middlewares (req, res, next)
```
