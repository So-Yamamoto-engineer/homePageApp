const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.get('/home',(req, res) => {
    res.render('home');
});

app.get('/name',(req, res) => {
    res.render('name');
})

app.get('/career',(req, res) => {
    res.render('career');
})

app.get('/skills',(req, res) => {
    res.render('skills');
})

app.get('/hobbies',(req, res) => {
    res.render('hobbies');
})

app.get('/portfolios',(req, res) => {
    res.render('portfolios');
})

app.get('/contact',(req, res) => {
    res.render('contact');
})

const port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log(`ポート${port}でリクエスト待機中`);
})