const express = require('express');
const app = express();
const port = 8888;
const cartItems = require('./routes/cart-items');

app.use('/', cartItems)

app.listen(port, () => console.log(`app up and running on port: ${port}`))