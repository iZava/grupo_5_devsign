const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, "../", "public")));

app.listen(9000, () => {
    console.log('Servidor funcionando');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/products', (req, res) => {
    res.sendFile(__dirname + '/views/products.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/views/register.html');
});


app.get('/cart', (req, res) => {
    res.sendFile(__dirname + '/views/productCart.html');
});

app.get('/detail', (req, res) => {
    res.sendFile(__dirname + '/views/productDetail.html');
});

/*Products*/

app.get('/t-shirts', (req, res) => {
    res.sendFile(__dirname + '/views/tshirts.html');
});

app.get('/mugs', (req, res) => {
    res.sendFile(__dirname + '/views/mugs.html');
});

app.get('/bottles', (req, res) => {
    res.sendFile(__dirname + '/views/bottles.html');
});

app.get('/hat', (req, res) => {
    res.sendFile(__dirname + '/views/hat.html');
});

app.get('/pillows', (req, res) => {
    res.sendFile(__dirname + '/views/pillows.html');
});

app.get('/hoddies', (req, res) => {
    res.sendFile(__dirname + '/views/hoddies.html');
});

app.get('/stickers', (req, res) => {
    res.sendFile(__dirname + '/views/stickers.html');
});