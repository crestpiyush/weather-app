const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPath);

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        name: 'Piyush Joshi',
        title: 'Weather app'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        name: 'Piyush Joshi',
        title: 'About me'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        name: 'Piyush Joshi',
        title: 'Help'
    });
});


app.get('/weather', (req, res) => {
    
    if (!req.query.address) {
        return res.send({
            errorMessage: 'You must have to provide address params'
        })
    }
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia',
        address: req.query.address
    });
});

app.get('/product', (req, res) => {
    if (!req.query.search) {
        return res.send({
            errorMessage: 'You must have to provide search params'
        })
    }

    return res.send({
        products: req.query.search
    })
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        name: 'Piyush Joshi',
        title: 'Help',
        errorMessage: '404 Page not found'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        name: 'Piyush Joshi',
        title: 'Help',
        errorMessage: '404 Page not found'
    });
});

app.listen(port, () => {
    console.log('Your server is up on port ', port);
});