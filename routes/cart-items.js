const express = require('express');
const router = express.Router();

const items = [
    {id: 1, price: 2, product:'apple', quantity:4},
    {id: 2, price: 3, product:'orange', quantity:3},
    {id: 3, price: 4, product:'berry', quantity:2},
    {id: 4, price: 5, product:'banana', quantity:1},
];

router.get('/', (req, res) => {
    res.json(items);
});

router.post('/', (req,res) => {
    console.log(req.body);
});

router.put('/:id', (req,res) => {
    console.log(req.params.id, req.body);
});

router.delete('/:id', (req,res) => {
    console.log(req.params.id);
});

module.exports = router;