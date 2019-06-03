const express = require('express');
const app = express();
const port = 8888;
const cartItems = require('./routes/cart-items');
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use('/', cartItems);

app.listen(port, () => console.log(`app up and running on port: ${port}`));