const express = require('express');

const app = new express();

app.use(express.json())

app.get('/get', (req, res) => {
    const obj = {name: 'Zhasulan'}

    res.send(JSON.stringify(obj))
})

app.get('/www', (req, res) => {
    res.send('www');
});

app.get('/about', (req, res) => {
    res.send('About');
});

app.post('/add', (req, res) => {
    const obj = {answer: 'BOOM-BOOM!'}
    res.send(JSON.stringify(obj))
})

app.use(express.static('html')).listen(9000, () => {
    console.log('Server works on port 9000');
});