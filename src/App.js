const express = require('express');
const path = require('path');
const app = express();
const PORT= process.env.PORT || 9000

app.use(express.static(path.join(__dirname, "../", "public")));

app.listen(PORT, () => {
    console.log('Servidor funcionando');
});

app.get('/', (req, res) => {
    path.join(__dirname + '/views/index.html');
});

app.get('/products', (req, res) => {
    path.join(__dirname + '/views/products.html');
});

app.get('/login', (req, res) => {
    path.join(__dirname + '/views/login.html');
});

app.get('/register', (req, res) => {
    path.join(__dirname + '/views/register.html');
});


app.get('/cart', (req, res) => {
    path.join(__dirname + '/views/productCart.html');
});

app.get('/detail', (req, res) => {
    path.join(__dirname + '/views/productDetail.html');
});

/*Products*/

app.get('/t-shirts', (req, res) => {
    path.join(__dirname + '/views/tshirts.html');
});

app.get('/mugs', (req, res) => {
    path.join(__dirname + '/views/mugs.html');
});

app.get('/bottles', (req, res) => {
    path.join(__dirname + '/views/bottles.html');
});

app.get('/hat', (req, res) => {
    path.join(__dirname + '/views/hat.html');
});

app.get('/pillows', (req, res) => {
    path.join(__dirname + '/views/pillows.html');
});

app.get('/hoddies', (req, res) => {
    path.join(__dirname + '/views/hoddies.html');
});

app.get('/stickers', (req, res) => {
    path.join(__dirname + '/views/stickers.html');
});